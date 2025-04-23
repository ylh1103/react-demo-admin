import type {
  ColDef,
  ColGroupDef,
} from 'ag-grid-community'
import {
  AllCommunityModule,
  ClientSideRowModelModule,
  ModuleRegistry,
  ValidationModule,
} from 'ag-grid-community'
import { AgGridReact } from 'ag-grid-react'
import { useFetchJson } from './useFetchJson'

ModuleRegistry.registerModules([AllCommunityModule])

export interface IOlympicData {
  athlete: string
  age: number
  country: string
  year: number
  date: string
  sport: string
  gold: number
  silver: number
  bronze: number
  total: number
}

function GridExample() {
  const { data, loading } = useFetchJson<IOlympicData>(
    'https://www.ag-grid.com/example-assets/olympic-winners.json',
  )

  const columns = useMemo<(ColDef | ColGroupDef)[]>(() => {
    if (data) {
      return [
        {
          headerName: '测试',
          children: [
            { field: 'athlete' },
            { field: 'country' },
          ],
        },
        {
          headerName: '结果',
          children: [
            { field: 'total' },
            { columnGroupShow: 'open', field: 'gold' },
            { columnGroupShow: 'open', field: 'silver' },
            { columnGroupShow: 'open', field: 'bronze' },
          ],
        },
      ]
    }
    return []
  }, [data])

  const handleSelectionChanged = (params) => {
    console.log('🚀 ~ handleSelectionChanged ~ params:', params)
  }

  return (
    <div className="h-200">
      <AgGridReact<IOlympicData>
        rowData={[]}
        loading={loading}
        columnDefs={columns}
        columnHoverHighlight
        defaultColDef={{ filter: true, cellStyle: { userSelect: 'text' }, flex: 1, minWidth: 200 }}
        rowSelection={{ mode: 'multiRow' }}
        onSelectionChanged={handleSelectionChanged}
        noRowsOverlayComponent={() => <div>122</div>}
        loadingOverlayComponent={() => <div>...</div>}
      />
    </div>
  )
}

export default GridExample
