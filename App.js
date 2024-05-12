import React from "react"

export default function App() {
    // const [data, setData] = React.useState({})
    const[starWarsData, setStarWarsData] = React.useState({})
    // const [count, setCount] = React.useState(0)
    const [count, setCount] = React.useState(1)

    console.log("Component rendered")

    //1.Get the data (fetch)
    //2.Save the data to state

    // fetch("https://swapi.dev/api/people/1")
    // .then(res => res.json()).then(data => console.log(data))
    // fetch("https://swapi.dev/api/people/1")
    //     .then(res => res.json())
    //     .then(data => setStarWarsData(data))

    // side effects
    // React.useEffect(function() {
    //     console.log("Effect ran")
    //     // fetch("https://swapi.dev/api/people/1")
    //     // .then(res => res.json())
    //     // .then(data => setStarWarsData(data))

    // }, [count])

    React.useEffect(function() {
        console.log("Effect ran")
        // fetch("https://swapi.dev/api/people/1")
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
        }, [count])
    //     .then(res => res.json()).then(data => console.log(data))
    // }, [count])
   


    // React.useEffect(() => {
    //     console.log("Effect function ran")
    // }, [count])


    return (
        <div>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            {/* <pre>{JSON.stringify(starWarsData, null, 2)}</pre> */}
            <h2>The count is {count}</h2>
            {/* <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button> */}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
