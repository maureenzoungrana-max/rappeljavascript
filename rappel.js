// créer un tableau d'objet de 5 utilisateurs 
// créer une fonction fléchée qui retourne la liste des utilisateurs ayant le rôle admis et qui sont actifs
// créer une fonction qui reçoit en paramètre un utilisateur et affiche ses informations , son prénom, son rôle et son âge
// créer un nouveau tableau contenant uniquement des objets simplifiés : prénom, nom, rôle (map et destructuration)
// transformer le tableau pour obtenir un seul objet dont les clés correspondent au role et les valeurs sont des tableaux contenant des utilisateurs associés 
// créer une fonction qui affiche le premier utilisateur agé de 25 ans en utilisant find
// ajouter un nouvel utilisateur dans un nouveau tableau appelé équipe qui contient tous les utilisateurs du premier utilisé les spread operator

// 1- tableau d'objet
let utilisateurs = [
    { prenom: "Alice", nom: "Dupont", age: 30, statut: 1, role: "admin" },
    { prenom: "Bob", nom: "Martin", age: 25, statut: 0, role: "user" },
    { prenom: "Charlie", nom: "Bernard", age: 35, statut: 1, role: "user" },
    { prenom: "Diana", nom: "Petit", age: 28, statut: 1, role: "admin" },
    { prenom: "Eve", nom: "Robert", age: 32, statut: 0, role: "user" }

];

// 2- fonction fléchée pour filtrer les utilisateurs actifs avec le rôle admin  
const getadmin = () => {
    let tab = [];
    for (let i = 0; i < utilisateurs.length; i++) {
        if (utilisateurs[i].role === "admin" && utilisateurs[i].statut === 1) {
            tab.push(utilisateurs[i]);
        }
    }
    return tab;
}

// autre methode

const getadmin1 = () => {
    return utilisateurs.filter((u) => u.role == 'admin' && u.statut == 1);
}
let res = getadmin1();
console.log(res);

// 2- fonction qui reçoit un utilisateur et affiche ses informations
const getinfos = (utilisateur) => {
    // destructuration
    let {prenom, nom, role} = utilisateur; 
    console.log(`${prenom} ${nom} ${role}`)
}
getinfos(utilisateurs[4]);

// 3- créer un nouveau tableau contenant uniquement des objets simplifiés : prénom, nom, rôle (map et destructuration)
let tab2 = utilisateurs.map((u) => {
    let {prenom, nom, role} = u;
    return {prenom, nom, role};
});
console.log(tab2);  

// 4- transformer le tableau pour obtenir un seul objet dont les clés correspondent au role et les valeurs sont des tableaux contenant des utilisateurs associés
let tab3 = utilisateurs.reduce((acc, u) => {
    let {role} = u;
    if (!acc[role]) {
        acc[role] = [];
    }  
    acc[role].push(u);
    return acc;
}, {});
console.log(tab3);

// 5- créer une fonction qui affiche le premier utilisateur agé de 25 ans en utilisant find
const getfirst25 = () => {
    return utilisateurs.find((u) => u.age === 25);
}
console.log(getfirst25());

// 6- ajouter un nouvel utilisateur dans un nouveau tableau appelé équipe qui contient tous les utilisateurs du premier utilisé les spread operator
let equipe = [...utilisateurs, { prenom: "Frank", nom: "Lemoine", age: 29, statut: 1, role: "user" }];
// spread operator : [...utilisateurs] => copie de tous les éléments du tableau utilisateurs
console.log(equipe);    

