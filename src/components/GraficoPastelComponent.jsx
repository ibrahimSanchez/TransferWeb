import { PieChart } from '@mui/x-charts/PieChart';


export const GraficoPastelComponent = ({ data = [] }) => {
  return (
    <div className='d-flex '>
      <PieChart
        colors={['#198754', '#343a40', '#6ea8fe']}
        series={[
          {
            data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'green' },
          },
        ]}
        height={200}
        width={500}
      />
    </div>
  );
}


