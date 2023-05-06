import PropTypes from 'prop-types';
import { Statistic, Title, StatList, Item, Label, Percentage } from './Statistics.styled';


export const Statistics = ({ title, stats }) => {
    return (
        <Statistic>
  {title && <Title>{title}</Title>}
            <StatList>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <Item key={id} style={{backgroundColor: randomColor()}}>
                            <Label>{label}</Label>
                            <Percentage>{ percentage}%</Percentage>

                        </Item>
                    )
                })}               
  </StatList>
</Statistic>
    )
}

function randomColor() {

  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const hex = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
  
    return hex;
}


Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape),
}