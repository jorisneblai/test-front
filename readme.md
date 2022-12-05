## 👨‍💻 Processus de développement / Remarques 👨‍💻

### Processus de développement
- Utilisation de la méthode map pour récupérer les données fournies du tableau d'objet. Des données pré-définies sont fournies avec le projet, j'ai choisi d'utiliser la méthode map pour simuler un rendu des données comme si il étaient récupérées d'une API. De ce fait, itérer sur le tableau de données et abstraire au maximum mon composant *Pane* semblait être la meilleure méthode.
- Dans le composant Pane, j'ai choisi de passer un props pour gérer les différents styles : "mainPane". Ce props va nous        permettre, en interne du composant, de gérer les différences de placement des éléments. Au début, ce choix semblait judicieux, mais à terme il à peut être trop complexifié le composant, cela peut faire l'objet d'une refactorisation.

### Remarques concernant les ressources fournis
- J'ai remarqué que l'imagine fournie n'est pas exactement similaire à celle présente dans la maquette, à quelques détails près, ce qui m'a empêché d'avoir un rendu au pixel près dans ma reproduction de la maquette.

### Évolution.s future.s
- Ajouter une props pour gérer le type de bouton.

# Publidata
➡ Front-end test

![Publidata Logo](https://s3-eu-west-1.amazonaws.com/publidata-prod/resources/29+Cover+1500x500%402X.jpg "Publidata Logo")

### 🌳 Environment

This test mainly uses Storybook (https://github.com/storybooks/storybook), React & Sass (via css-module).

ℹ Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

### 🔌 Installation

1. Install dependencies : `yarn install`
2. Run : `yarn storybook`
3. Open : http://localhost:6006/

### 💪 Exercise

Turn the image below into storybook components: small, reusable, and testable 🐒

:warning: All necessary resources are already provided in repository :

- colors: in main sass file https://github.com/publidata/test-front/blob/master/src/assets/styles/main.scss
- fonts: Source Sans Pro, font-awesome (see : https://fontawesome.com/v5/search), unicode (for emoji 🐝 & 🙆)
- image: https://github.com/publidata/test-front/blob/master/src/components/Pane/gardener_cover.png

<img src="https://s3-eu-west-1.amazonaws.com/publidata-prod/resources/sample.png" width="405">
