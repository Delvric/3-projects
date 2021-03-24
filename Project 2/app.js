let data =[
{
    name: "Delvric",
    age:"39"
    },
{
    name: "Elysse",
    age:"37"
    },
{
    name: "Joaquin",
    age:"17"
    },
{
    name: "Lorra",
    age:"17"
    },
{
    name: "Taryn",
    age:"16"
    },
{
    name: "Seth",
    age:"15"
    },
{
    name: "Elijah",
    age:"12"
    },
{
    name: "Symone",
    age:"10"
    },
{
    name: "Evangeline",
    age:"10"
},
]

const info = document.querySelector("#info")

let details = data.map(function (item) {
    return '<div>' + item.name + ' ' + 'is ' +item.age + 'years old ' + '</div>';
    
});

info.innerHTML = details.join('\n');