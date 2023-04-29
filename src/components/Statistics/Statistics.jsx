import PropTypes from 'prop-types';
import css from './Statistics.module.css';


export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
  {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statList}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li className={css.item} key={id} style={{backgroundColor: randomColor()}}>
                            <span className={css.label}>{label}</span>
                            <span className={css.percentage}>{ percentage}%</span>

                        </li>
                    )
                })}               
  </ul>
</section>
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