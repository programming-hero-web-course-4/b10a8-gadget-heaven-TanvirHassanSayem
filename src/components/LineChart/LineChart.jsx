
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

 const LineChart1= () =>  {
  const MathMarksData= [
    { "id": 1, "student": "Alice", "mathMarks": 85 },
    { "id": 2, "student": "Bob", "mathMarks": 78 },
    { "id": 3, "student": "Charlie", "mathMarks": 92 },
    { "id": 4, "student": "David", "mathMarks": 65 },
    { "id": 5, "student": "Eva", "mathMarks": 88 },
    { "id": 6, "student": "Frank", "mathMarks": 73 },
    { "id": 7, "student": "Grace", "mathMarks": 90 },
    { "id": 8, "student": "Helen", "mathMarks": 79 },
    { "id": 9, "student": "Ivan", "mathMarks": 68 },
    { "id": 10, "student": "Jack", "mathMarks": 84 }
  ] 
  return (
    <div>
     
      <LChart width={800} height={300} data={MathMarksData}> 
      <XAxis dataKey="mathMarks"  />
      <YAxis />
        <Line dataKey="mathMarks" stroke="#8884d8"></Line>
      </LChart>
    </div>
  )
}

export default LineChart1