function Card() {
  const title = 'My first react'
  const value = 50
  function saleOn() {
    return true
  }

  return (
    <div className='row'>
      <div className='col s2'>
        <div className='card hoverable small'>
          <div className='card-image'>
            <img src='http://lorempixel.com/400/200/city' />
          </div>

          <div className='card-content'>
            <p>{title}</p>
            <p>Hello</p>
          </div>

          <div className='card-action'>
            <a href='#'>$ {saleOn() ? 30 : 50}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
