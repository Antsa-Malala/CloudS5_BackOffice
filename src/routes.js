import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

//Commission
const Commission=React.lazy(() => import('./views/commission/Commission'))
const AjoutCommission=React.lazy(() => import('./views/commission/AjoutCommission'))

// Categorie
const Categorie = React.lazy(() => import('./views/categorie/Categorie'))
const ListeCategorie = React.lazy(() => import('./views/categorie/ListeCategorie'))
const AjoutCategorie = React.lazy(() => import('./views/categorie/AjoutCategorie'))
const ModifierCategorie = React.lazy(() => import('./views/categorie/ModifierCategorie'))

// Energie
const ListeEnergie = React.lazy(() => import('./views/energie/ListeEnergie'))
const ModifierEnergie = React.lazy(() => import('./views/energie/ModifierEnergie'))
const AjoutEnergie = React.lazy(() => import('./views/energie/AjoutEnergie'))

// Modele
const ListeModele = React.lazy(() => import('./views/modele/ListeModele'))
const ModifierModele = React.lazy(() => import('./views/modele/ModifierModele'))
const AjoutModele = React.lazy(() => import('./views/modele/AjoutModele'))

// Marque
const ListeMarque = React.lazy(() => import('./views/marque/ListeMarque'))
const ModifierMarque = React.lazy(() => import('./views/marque/ModifierMarque'))
const AjoutMarque = React.lazy(() => import('./views/marque/AjoutMarque'))

// Ville
const ListeVille = React.lazy(() => import('./views/ville/ListeVille'))
const ModifierVille = React.lazy(() => import('./views/ville/ModifierVille'))
const AjoutVille = React.lazy(() => import('./views/ville/AjoutVille'))

// Couleur
const ListeCouleur = React.lazy(() => import('./views/couleur/ListeCouleur'))
const ModifierCouleur = React.lazy(() => import('./views/couleur/ModifierCouleur'))
const AjoutCouleur = React.lazy(() => import('./views/couleur/AjoutCouleur'))

// Boite
const ListeBoite = React.lazy(() => import('./views/boite/ListeBoite'))
const ModifierBoite = React.lazy(() => import('./views/boite/ModifierBoite'))
const AjoutBoite = React.lazy(() => import('./views/boite/AjoutBoite'))

// Porte
const ListePorte = React.lazy(() => import('./views/porte/ListePorte'))
const ModifierPorte = React.lazy(() => import('./views/porte/ModifierPorte'))
const AjoutPorte = React.lazy(() => import('./views/porte/AjoutPorte'))

// Place
const ListePlace = React.lazy(() => import('./views/place/ListePlace'))
const ModifierPlace = React.lazy(() => import('./views/place/ModifierPlace'))
const AjoutPlace = React.lazy(() => import('./views/place/AjoutPlace'))

// Utilisateur
const ListeUtilisateur = React.lazy(() => import('./views/utilisateur/ListeUtilisateur'))
const ModifierUtilisateur = React.lazy(() => import('./views/utilisateur/ModifierUtilisateur'))
const AjoutUtilisateur = React.lazy(() => import('./views/utilisateur/AjoutUtilisateur'))

// Annonce
const ListeAnnonce = React.lazy(() => import('./views/annonce/ListeAnnonce'))
const ModifierAnnonce = React.lazy(() => import('./views/annonce/ModifierAnnonce'))
const DetailsAnnonce = React.lazy(() => import('./views/annonce/DetailsAnnonce'))
const AjoutAnnonce = React.lazy(() => import('./views/annonce/AjoutAnnonce'))


const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  { path: '/commissions', name: 'Valeur Commission', element: Commission },
  { path: '/commissions/ajouter', name: 'Ajout Commission', element: AjoutCommission },

  { path: '/categories', name: 'Categorie page', element: ListeCategorie },
  { path: '/categories/ajouter', name: 'Ajout Categorie', element: AjoutCategorie },
  { path: '/categories/modifier/:id/:nom/:id_nom', exact: true, name: 'Modifier Categorie', element: ModifierCategorie },

  { path: '/marques', name: 'Liste Marque', element: ListeMarque },
  { path: '/marques/ajouter', name: 'Ajout Marque', element: AjoutMarque },
  { path: '/marques/modifier/:id/:nom/:id_nom', exact: true, name: 'Modifier Marque', element: ModifierMarque },

  { path: '/villes', name: 'Liste Villes', element: ListeVille },
  { path: '/villes/ajouter', name: 'Ajout Ville', element: AjoutVille },
  { path: '/villes/modifier/:id/:nom/:id_nom', exact: true, name: 'Modifier Ville', element: ModifierVille },

  { path: '/couleurs', name: 'Liste Couleurs', element: ListeCouleur },
  { path: '/couleurs/ajouter', name: 'Ajout Couleur', element: AjoutCouleur },
  { path: '/couleurs/modifier/:id/:nom/:id_nom', exact: true, name: 'Modifier Couleur', element: ModifierCouleur },

  { path: '/boites', name: 'Liste Boite', element: ListeBoite },
  { path: '/boites/ajouter', name: 'Ajout Boite', element: AjoutBoite },
  { path: '/boites/modifier/:id/:nom/:id_nom', exact: true, name: 'Modifier Boite', element: ModifierBoite },

  { path: '/portes', name: 'Liste Portes', element: ListePorte },
  { path: '/portes/ajouter', name: 'Ajout Porte', element: AjoutPorte },
  { path: '/portes/modifier/:id/:nom/:id_nom', exact: true, name: 'Modifier Porte', element: ModifierPorte },

  { path: '/places', name: 'Liste Places', element: ListePlace },
  { path: '/places/ajouter', name: 'Ajout Place', element: AjoutPlace },
  { path: '/places/modifier/:id/:nom/:id_nom', exact: true, name: 'Modifier Place', element: ModifierPlace },

  { path: '/energies', name: 'Liste energies', element: ListeEnergie },
  { path: '/energies/ajouter', name: 'Ajout energies', element: AjoutEnergie },
  { path: '/energies/modifier/:id/:nom/:id_nom', exact: true, name: 'Modifier Energie', element: ModifierEnergie },

  { path: '/modeles', name: 'Liste Modele', element: ListeModele },
  { path: '/modeles/ajouter', name: 'Ajout Modele', element: AjoutModele },
  { path: '/modeles/modifier/:id', exact: true, name: 'Modifier Modele', element: ModifierModele },

  { path: '/utilisateurs', name: 'Liste Utilisateurs', element: ListeUtilisateur },
  { path: '/utilisateurs/ajouter', name: 'Ajout Utilisateurs', element: AjoutUtilisateur },
  { path: '/utilisateurs/modifier/:id', exact: true, name: 'Modifier Utilisateur', element: ModifierUtilisateur },

  { path: '/annonces', name: 'Liste Annonces', element: ListeAnnonce },
  { path: '/annonces/ajouter', name: 'Ajout Annonces', element: AjoutAnnonce },
  { path: '/annonces/modifier/:id', exact: true, name: 'Modifier Annonce', element: ModifierAnnonce },
  { path: '/annonces/details/:id', exact: true, name: 'Details Annonce', element: DetailsAnnonce },




































































  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
