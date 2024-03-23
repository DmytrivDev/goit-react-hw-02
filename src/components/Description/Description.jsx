import css from './Description.module.scss';

function Description() {
  return (
    <div className={css.desccont}>
      <h1 className='title'>Sip Happens Café</h1>
      <p className='descr'>Please leave your feedback about our service by selecting one of the options below.</p>
    </div>
  )
}

export default Description;
