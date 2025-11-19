# 📝 Guide de Modification du Portfolio

## 🎯 Comment Modifier les Informations

### 1. **Modifier les Informations Personnelles**
**Fichier :** `src/components/Hero.jsx`

```javascript
const portfolioData = {
    name: "Riyadh Hadjba",                    // ← Modifier votre nom
    title: "Étudiant en Histoire de l'Art",   // ← Modifier votre titre
    about: "Votre description ici...",        // ← Modifier votre bio
    contact: [
        { 
            type: "email", 
            label: "votre.email@exemple.com", // ← Modifier email
            url: "mailto:votre.email@exemple.com",
            icon: Mail 
        },
        // Ajouter d'autres contacts si besoin
    ]
}
```

### 2. **Modifier les Expériences Professionnelles**
**Fichier :** `src/components/Experience.jsx`

```javascript
const portfolioData = {
    experience: [
        {
            title: "Votre poste",
            company: "Nom de l'entreprise",
            logo: "/Logo/votre-logo.png",      // ← Chemin vers le logo
            website: "https://site-entreprise.com",
            date: "Mois Année - Présent",
            description: "Description détaillée..."
        },
        // Ajouter d'autres expériences
    ]
}
```

### 3. **Modifier les Formations**
**Fichier :** `src/components/Education.jsx`

```javascript
const portfolioData = {
    education: [
        {
            degree: "Nom du diplôme",
            school: "Nom de l'établissement",
            date: "Année ou 'En cours'"
        },
        // Ajouter d'autres formations
    ]
}
```

### 4. **Modifier les Projets**
**Fichier :** `src/components/Projects.jsx`

```javascript
const portfolioData = {
    projects: [
        {
            title: "Nom du projet",
            description: "Description du projet",
            link: "https://lien-vers-projet.com",
            linkText: "Voir le projet"
        },
        // Ajouter d'autres projets
    ]
}
```

## 🖼️ Ajouter/Modifier les Images

### Photo de Profil
- **Emplacement :** `photo_identite/Photo_identite.jpg`
- **Format recommandé :** Carré (1:1)
- **Taille :** Minimum 400x400 pixels

### Logos des Entreprises
- **Emplacement :** `Logo/`
- **Format recommandé :** PNG avec fond transparent
- **Taille :** 200x200 pixels minimum

### Peintures d'Arrière-plan
- **Emplacement :** `Peintures/Images/`
- **Pour modifier les peintures flottantes :** `src/components/FloatingPaintings.jsx`

```javascript
const paintings = [
    {
        src: "/Peintures/Images/nouvelle-peinture.jpg",
        width: 200,           // Largeur en pixels
        top: "10%",           // Position verticale
        left: "5%",           // Position horizontale
        rotation: -5,         // Rotation initiale
        delay: 0              // Délai d'animation
    },
    // Ajouter d'autres peintures
]
```

## 🎨 Personnaliser le Design

### Couleurs (Tailwind Config)
**Fichier :** `tailwind.config.js`

```javascript
theme: {
    extend: {
        colors: {
            'off-white': '#f9f7f1',      // Arrière-plan
            'charcoal': '#333333',       // Texte principal
            'gold': '#b8860b',           // Accents
            'terracotta': '#a0522d',     // Textes secondaires
        },
    },
}
```

### Polices
Les polices sont importées depuis Google Fonts dans `index.html` :
- **Playfair Display** : Pour les titres
- **Lato** : Pour le texte courant

## 🚀 Commandes Utiles

```bash
# Lancer le site en développement
npm run dev

# Construire pour la production
npm run build

# Voir le site construit
npm run preview

# Installer de nouvelles dépendances
npm install nom-du-package
```

## 💡 Conseils

1. **Sauvegardez toujours** avant de faire des modifications importantes
2. **Testez sur mobile** après chaque changement
3. **Les images doivent être optimisées** pour le web
4. **Gardez une copie** de vos modifications dans un document séparé

## 🆘 Résolution de Problèmes

### Le site ne se lance pas
```bash
npm install  # Réinstaller les dépendances
npm run dev  # Relancer
```

### Les images ne s'affichent pas
- Vérifiez les chemins des fichiers
- Assurez-vous que les images existent dans le bon dossier
- Redémarrez le serveur de développement

### Les modifications ne s'affichent pas
- Vérifiez que vous avez sauvegardé les fichiers
- Rafraîchissez la page dans le navigateur
- Redémarrez le serveur : `Ctrl+C` puis `npm run dev`

---

**📞 Besoin d'aide ?** Consultez le fichier `README.md` pour plus d'informations techniques.