function systemComponents(input) {
    let register = new Map();
    for (let line of input) {
        let [systemName, componentName, subcomponentName] = line.split(/\s*\|\s*/);
        if (!register.has(systemName)) {
            register.set(systemName, new Map());
        }
        if (!register.get(systemName).has(componentName)) {
            register.get(systemName).set(componentName, []);
        }
        register.get(systemName).get(componentName).push(subcomponentName);
    }
    let sortedRegister = Array.from(register.keys()).sort((a, b) => sortRegister(a, b));

    for (let system of sortedRegister) {
        console.log(system);
        let sortedComponents = Array.from(register.get(system).keys()).sort((a, b) => register.get(system).get(b).length -
            register.get(system).get(a).length);
        for (let component of sortedComponents) {
            console.log(`|||${component}`);
            register.get(system).get(component).forEach(sc => console.log(`||||||${sc}`));
        }
    }

    function sortRegister(a, b) {
        if (register.get(a).size != register.get(b).size) {
            return register.get(b).size - register.get(a).size;
        } else {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    }
}

systemComponents(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);