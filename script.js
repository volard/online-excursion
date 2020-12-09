var galleryContent = "";
for (var i = 1; i <= 23; i++) {
    galleryContent = galleryContent +
        "<div index = '" + i + "' class='gallery-item' style=\"background-image: url(/scenes/optimised/" + i + ".jpg);\"></div>";
}
var galleryElement = document.getElementById('gallery');
galleryElement.insertAdjacentHTML('afterBegin', galleryContent);


// top, left
var path = {
    '1': [{
        "to": "2",
        "coords": ["72.4%", "69.3%"]
    }],
    '2': [{
            "to": "3",
            "coords": ["50%", "33%"]
        },
        {
            "to": "1",
            "coords": ["85%", "50%"]
        }
    ],
    '3': [{
            "to": "5",
            "coords": ["57%", "35.9%"]
        },
        {
            "to": "10",
            "coords": ["30.7%", "16.5%"]
        },
        {
            "to": "2",
            "coords": ["85%", "50%"]
        }
    ],
    '4': [{
        "to": "5",
        "coords": ["80%", "50%"]
    }],
    '5': [{ //коридор 1 этаж
            "to": "3",
            "coords": ["66%", "8.4%"]
        },
        {
            "to": "9",
            "coords": ["54%", "34%"]
        },
        {
            "to": "6",
            "coords": ["52.7%", "57.4%"]
        },
        {
            "to": "4",
            "coords": ["63.8%", "62.1%"]
        },
        {
            "to": "8",
            "coords": ["46.2%", "43.7%"]
        }
    ],
    '6': [{
            "to": "7",
            "coords": ["54.3%", "64.3%"]
        },
        {
            "to": "5",
            "coords": ["90%", "79.6%"]
        }
    ],
    "7": [{
        "to": "6",
        "coords": ["79%", "85.5%"]
    }],
    "8": [{
        "to": "5",
        "coords": ["77%", "70%"]
    }],
    "9": [{
        "to": "5",
        "coords": ["85%", "50%"]
    }],
    "10": [{
            "to": "3",
            "coords": ["50%", "12%"]
        },
        {
            "to": "11",
            "coords": ["53%", "66%"]
        },
        {
            "to": "15",
            "coords": ["50%", "46.7%"]
        },
        {
            "to": "20",
            "coords": ["51%", "57.8%"]
        }
    ],
    "11": [{
            "to": "10",
            "coords": ["88.4%", "50%"]
        },
        {
            "to": "12",
            "coords": ["67.9%", "82.1%"]
        },
        {
            "to": "14",
            "coords": ["70%", "29%"]
        },
        {
            "to": "13",
            "coords": ["55.8%", "58%"]
        }
    ],
    "12": [{
            "to": "13",
            "coords": ["84.2%", "90%"]
        },
        {
            "to": "10",
            "coords": ["37.8%", "74.1%"]
        }
    ],
    "13": [{
            "to": "10",
            "coords": ["39.1%", "25.9%"]
        },
        {
            "to": "12",
            "coords": ["86%", "17%"]
        },
        {
            "to": "14",
            "coords": ["48%", "56%"]
        }
    ],
    "14": [{
            "to": "10",
            "coords": ["50%", "7.7%"]
        },
        {
            "to": "13",
            "coords": ["56%", "89%"]
        }
    ],
    "15": [{
            "to": "10",
            "coords": ["88%", "50%"]
        },
        {
            "to": "16",
            "coords": ["69.8%", "23.3%"]
        },
        {
            "to": "17",
            "coords": ["66.5%", "41%"]
        },
        {
            "to": "18",
            "coords": ["48%", "49%"]
        },
        {
            "to": "19",
            "coords": ["49%", "66.5%"]
        }
    ],
    "16": [{
            "to": "15",
            "coords": ["86%", "50%"]
        },
        {
            "to": "17",
            "coords": ["80%", "14%"]
        },
        {
            "to": "18",
            "coords": ["43%", "14%"]
        },
        {
            "to": "19",
            "coords": ["40%", "40%"]
        }
    ],
    "17": [{
            "to": "16",
            "coords": ["46%", "10%"]
        },
        {
            "to": "18",
            "coords": ["40%", "78%"]
        }
    ],
    "18": [{
        "to": "17",
        "coords": ["56%", "34%"]
    }],
    "19": [{
        "to": "15",
        "coords": ["40%", "85%"]
    }],
    "20": [{
            "to": "22",
            "coords": ["66.5%", "13.5%"]
        },
        {
            "to": "23",
            "coords": ["62.7%", "56.8%"]
        },
        {
            "to": "21",
            "coords": ["72.5%", "36.7%"]
        },
        {
            "to": "10",
            "coords": ["88.4%", "55.2%"]
        }
    ],
    "21": [{
        "to": "20",
        "coords": ["68.7%", "49%"]
    }],
    "22": [{
        "to": "20",
        "coords": ["48.6%", "13.1%"]
    }],
    "23": [{
        "to": "20",
        "coords": ["66%", "83%"]
    }]
}


var mainImage = document.getElementById("main-image-div");


function setOnLabelsPlace(scene) {
    let htmlLabels = ""
    for (let i = 0; i < path[scene].length; i++) {
        htmlLabels += "<div class = 'label' goto = '" +
            path[scene][i]["to"] + "' style = 'top:" + path[scene][i]["coords"][0] +
            "; left: " + path[scene][i]["coords"][1] + "'>" +
            "<img  src='location (1).svg' alt='label' ondragstart='return false;'></img>" +
            "</div>";
    }
    mainImage.insertAdjacentHTML('afterend', htmlLabels);
}

function deleteLabels() {
    let labels = document.getElementsByClassName("label");
    while (labels.length !== 0) {
        labels[labels.length - 1].remove();
    }
}

setOnLabelsPlace("1");

document.onclick = function(event) {
    if (event.target.hasAttribute('goto')) {
        var goto = event.target.getAttribute("goto");
    } else if (event.target.parentNode.hasAttribute('goto')) {
        var goto = event.target.parentNode.getAttribute('goto');
    } else { return; }
    mainImage.setAttribute('style', 'background-image: url("/scenes/' + goto + '.jpg");');
    deleteLabels();
    setOnLabelsPlace(goto);
}


var banner;

document.addEventListener("DOMContentLoaded",
    function(ev) {
        banner = document.getElementsByClassName('attention-banner')[0];
        if (window.innerHeight > window.innerWidth) {
            banner.classList.toggle('-showed');
        }

        if (banner.classList.length < 2) {}
    });


window.onresize = function() {
    if (window.innerHeight > window.innerWidth) {
        banner.classList.add('-showed');
    } else {
        banner.classList.remove('-showed');
    }
}


function toggleGallery() {

}