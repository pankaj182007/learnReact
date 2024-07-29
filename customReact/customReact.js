function customRander(rectElement,Container){
    const domElement=document.createElement(rectElement.type)
    domElement.innerHTML=rectElement.children
    domElement.setAttribute("href",rectElement.props.href)
    domElement.setAttribute("target",rectElement.props.target)
    Container.appendChild(domElement)
}

const rectElement={
    type:'a',
    props:{
        href : 'https://google.com',
        target : '_blank'
    },
    children : "Click me to visit google"
}

const mainContainer = document.querySelector("#root")

customRander(rectElement,mainContainer)