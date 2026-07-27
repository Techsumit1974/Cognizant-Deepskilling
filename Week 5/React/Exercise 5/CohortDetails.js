import styles from './CohortDetails.module.css';

function CohortDetails({name,status,mentor,startDate}){
  return(
    <div className={styles.box}>
      <h3 style={{color: status==='ongoing' ? 'green':'blue'}}>
        {name}
      </h3>
      <dl>
        <dt>Status</dt><dd>{status}</dd>
        <dt>Mentor</dt><dd>{mentor}</dd>
        <dt>Start Date</dt><dd>{startDate}</dd>
      </dl>
    </div>
  );
}
export default CohortDetails;
