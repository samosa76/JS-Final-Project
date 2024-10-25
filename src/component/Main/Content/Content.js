import Items from "./ContentItems"

function Content() {

    var data = {
        'title': 'New Books',
        'desc': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio laborum quisquam harum unde nobis voluptate praesentium quos autem, odio quam ratione esse dolorum repellendus molestiae accusamus modi sequi corporis incidunt.',
        'genre': ['Genre 1', 'Genre 2', 'Genre 3'],
    };

    const { title, desc, genre } = data;


    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Items title={title} desc={desc} genre={genre} />
                <Items title={title} desc={desc} genre={genre} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Items title={title} desc={desc} genre={genre} />
                <Items title={title} desc={desc} genre={genre} />
            </div>
            
        </div>

    )
}

export default Content;