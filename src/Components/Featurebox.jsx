import React from 'react';

function Featurebox(props) {
    return (
        <div className='a-box'>
           <div className="a-b-img">
               <img src={props.image} alt="" /></div>
               <div className="s-b-text">
                   <h2>{props.title}</h2>
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus fugiat aspernatur repellat impedit deserunt eveniet ad deleniti dolor neque, tempora enim mollitia reiciendis alias, dicta cumque omnis laboriosam? Consequuntur, numquam.
                   Ad, nulla eligendi labore magni, iusto alias veniam aliquam delectus earum quam obcaecati ducimus. Excepturi maiores praesentium autem itaque consectetur et tenetur voluptas? Quod, quibusdam impedit suscipit minus magni ut.
                   Accusantium nihil sed aspernatur quam laboriosam dolorum. Nostrum, ipsa quisquam tempora cum quidem voluptas in eum, odio incidunt dicta distinctio, doloremque eos tempore dolorem natus dolorum porro minus omnis laudantium?
                   Blanditiis commodi impedit ipsa eos iusto officiis reiciendis, repellendus cum explicabo numquam ut placeat alias est minima tempora. Vel animi totam modi molestiae minima? Voluptate tempore alias nisi voluptatem ut?</p></div> 
        </div>
    )
}

export default Featurebox;