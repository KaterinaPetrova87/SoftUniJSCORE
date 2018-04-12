function employeeData(text) {
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;

    for (let line of text) {
        let match = regex.exec(line);
        if (match != null) {
            console.log(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`)
        }
    }
}

employeeData(['Jonathan - 2000 - Manager', 'Peter- 1000- Chuck','George - 1000 - Team Leader']);