function capitalizeTheWords(str) {
    console.log(str.toLowerCase().split(' ').map(e => e[0].toUpperCase() + e.substring(1)).join(' '));
}

capitalizeTheWords('Was that Easy? tRY thIs onE for SiZe!');