import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {

    const subjectMarksData = [
        { id: 1, name: 'Alice', math: 78, physics: 85, chemistry: 80 },
        { id: 2, name: 'Bob', math: 80, physics: 78, chemistry: 82 },
        { id: 3, name: 'Charlie', math: 95, physics: 90, chemistry: 88 },
        { id: 4, name: 'David', math: 90, physics: 87, chemistry: 91 },
        { id: 5, name: 'Emma', math: 68, physics: 76, chemistry: 72 },
        { id: 6, name: 'Frank', math: 97, physics: 93, chemistry: 95 },
        { id: 7, name: 'Grace', math: 85, physics: 80, chemistry: 86 },
        { id: 8, name: 'Hannah', math: 77, physics: 79, chemistry: 74 },
        { id: 9, name: 'Ian', math: 84, physics: 83, chemistry: 82 },
        { id: 10, name: 'Jack', math: 92, physics: 88, chemistry: 90 }
    ];


    return (
        <div>
            <LChart width={800} height={500} data={subjectMarksData}>
            <XAxis dataKey="name" />
            <YAxis></YAxis>
                <Line dataKey="math" stroke='red' ></Line>
                <Line dataKey="physics" stroke='yellow'></Line>
                <Line dataKey="chemistry" stroke='white'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;