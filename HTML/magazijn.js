const dag1 = {
    borden: 42,
    glazen: 57,
    messen: 85,
    vorken: 96,
    lepels: 103,
};

const dag2 = {
    borden: 31,
    glazen: 48,
    messen: 63,
    vorken: 82,
    lepels: 89,
};

for (const [key, value] of dag1) {
    console.log(`Er zijn${value} ${key} verkocht.`);
}

