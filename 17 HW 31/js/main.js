const refs = {
    redirectBlock: document.querySelector('#redirectBlock'),
    inputLink: document.querySelector('#inputLink'),
};

let link = refs.inputLink.value;

refs.redirectBlock.addEventListener('click', goRedirect)

function checkLink(protocol) {
    if (!link.startsWith('http')) {
        return `${protocol}://${link}`;
    };
    
    return link;
};

function goRedirect(event) {
    if(event.target.tagName !== 'BUTTON') {
        return;
    };

    link = refs.inputLink.value;
    
    const protocol = event.target.id;
    const linkToGo = checkLink(protocol);

    window.open(linkToGo, "_blank")
};