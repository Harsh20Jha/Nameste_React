 // Updated html through JS 
 const heading = document.createElement('h1'); // create h1 element
 heading.innerHTML = "Hello world from js"; // update text in h1
 const root = document.getElementById('root');// find the root 
 root.appendChild(heading);// added element in root

 //  Updated html through React 
 // <div id="ReactRoot"><h1 id="heading" xyg="abc">Hello world from React</h1></div>
 const ReactHeading = React.createElement('h1', {id:'heading', xyg:'abc'}, 'Hello world from React');
 const ReactRoot = ReactDOM.createRoot(document.getElementById('ReactRoot'))
 ReactRoot.render(ReactHeading);

 /*
 <div id ="parent">
	<div id = "child">
    <h1></h1>
</div>
</div>
*/

const NewDiv = React.createElement('div', 
{id: 'parent'}, 
React.createElement('div', 
{id: 'child'},
React.createElement('h1', {}, 'Helloo world from reach child node')
)
);

const ReactElement = ReactDOM.createRoot(document.getElementById('ReactElement'))

ReactElement.render(NewDiv);

// if we have to creade shivlings like another h2 tag after h1 tag

/*
 <div id ="parent">
	<div id = "child">
    <h1></h1>
    <h2></h2>
</div>
</div>
*/
// todo so we have to crete and array of childrens

const NewDiv_02 = React.createElement('div', 
{id: 'parent'}, 
React.createElement('div', 
{id: 'child'},
[React.createElement('h1', {}, 'This is h1 tag'),
React.createElement('h2', {}, 'This is h2 tag')]
)
);

const ReactElement_02 = ReactDOM.createRoot(document.getElementById('ReactElement_02'))

ReactElement_02.render(NewDiv_02);