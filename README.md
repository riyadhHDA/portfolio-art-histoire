# Portfolio Art Histoire

Un portfolio élégant avec thème histoire de l'art développé avec React, Tailwind CSS et Framer Motion.

## 🎨 Caractéristiques

- **Design Musée Moderne** : Thème sophistiqué inspiré des galeries d'art
- **Arrière-plan Animé** : Peintures classiques flottant en parallaxe
- **Effets Glassmorphism** : Conteneurs semi-transparents pour une lisibilité parfaite
- **Animations Fluides** : Transitions et micro-interactions avec Framer Motion
- **Responsive Design** : Parfait sur tous les appareils

## 🚀 Installation

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```

3. **Ouvrir dans le navigateur** :
   ```
   http://localhost:3000
   ```

## 📁 Structure du Projet

```
src/
├── components/
│   ├── FloatingPaintings.jsx    # Peintures animées en arrière-plan
│   ├── Hero.jsx                 # Section d'en-tête avec photo
│   ├── Experience.jsx           # Expériences professionnelles
│   ├── Education.jsx            # Formations
│   └── Projects.jsx             # Projets personnels
├── App.jsx                      # Composant principal
├── main.jsx                     # Point d'entrée React
└── index.css                    # Styles globaux
```

## 🎯 Personnalisation

### Modifier le contenu
Toutes les données sont centralisées dans chaque composant. Modifiez les objets `portfolioData` dans :
- `src/components/Hero.jsx` : Nom, titre, bio, contacts
- `src/components/Experience.jsx` : Expériences professionnelles
- `src/components/Education.jsx` : Formations
- `src/components/Projects.jsx` : Projets personnels

### Ajouter des peintures
Modifiez le tableau `paintings` dans `src/components/FloatingPaintings.jsx` :
```javascript
{
  src: "/chemin/vers/image.jpg",
  width: 200,           // Largeur en pixels
  top: "10%",           // Position verticale
  left: "5%",           // Position horizontale
  rotation: -5,         // Rotation initiale
  delay: 0              // Délai d'animation
}
```

## 🛠 Technologies Utilisées

- **React 18** : Framework JavaScript
- **Vite** : Outil de build rapide
- **Tailwind CSS** : Framework CSS utilitaire
- **Framer Motion** : Bibliothèque d'animations
- **Lucide React** : Icônes modernes

## 📱 Responsive

Le site s'adapte parfaitement à :
- Desktop (1200px+)
- Tablette (768px - 1199px)  
- Mobile (< 768px)

## 🎨 Palette de Couleurs

- **Off-white** : `#f9f7f1` - Arrière-plan
- **Charcoal** : `#333333` - Texte principal
- **Gold** : `#b8860b` - Accents et bordures
- **Terracotta** : `#a0522d` - Textes secondaires

## 📄 Licence

Ce projet est sous licence MIT. Vous pouvez librement l'utiliser et le modifier.