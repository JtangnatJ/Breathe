import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const nameLabel = (entry) => {
  return entry.name;
};

const COLORS = ["#808080", "#8566AA", "#6983AA"]
export default class SessionEntry extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PieChart width={1500} height={600}>
        <Pie
          dataKey="value"
          startAngle={360}
          endAngle={0}
          data={this.props.data}
          outerRadius={250}
        //   fill="#6983AA"
          label={nameLabel}
        >
          {
              this.props.data.map((entry, index) => <Cell fill={COLORS[index]}/>)
          }
        </Pie>
      </PieChart>
    );
  }
}
