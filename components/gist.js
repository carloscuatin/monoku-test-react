import React from 'react'

const styles = {
  userCont: {
    display: 'flex'
  },
  info: {
    display: 'flex',
    alignItems: 'center'
  },
  photoUser: {
    paddingRight: 10
  }
}

const Gist = props => {
  const { owner, description, created_at } = props;
  return (
    <div>
      <div style={styles.userCont}>
        { owner ? <div style={styles.info}>
          <img src={owner.avatar_url} width="50" style={styles.photoUser}/>
          <span>{owner.login}</span>
        </div> : <span>Anonymous</span> }
      </div> <br />
      {description} <br />
      {created_at}
    </div>
  )
}

export default Gist;
