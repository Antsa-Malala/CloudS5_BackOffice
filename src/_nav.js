import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilStar,
  cilBarChart,
  cilCarAlt,
  cilBolt,
  cilLocationPin,
  cilGarage,
  cilClearAll,
  cilApplications,
  cilDoor,
  cilUser,
  cilList,
  cilMoney,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
 /* {
    component: CNavItem,
    name: 'Se connecter',
    to: '/login',
    icon: <CIcon icon={cilArrowThickFromLeft} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'S\'inscrire',
    to: '/register',
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
  },*/
  {
    component: CNavItem,
    name: 'Statistiques',
    to: '/dashboard',
    icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Gestion des annonces',
    to: '/annonces',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
    
  },
  
  {
    component: CNavItem,
    name: 'Gestion des utilisateurs',
    to: '/utilisateurs',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    
  },
  {
    component: CNavItem,
    name: 'Commissions',
    to: '/commissions',
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
    
  },


  {
    component: CNavTitle,
    name: 'Gestion des éléments',
  },

  {
    component: CNavGroup,
    name: 'Catégories',
    icon: <CIcon icon={cilGarage} customClassName="nav-icon" />,
    items : [
      {
        component: CNavItem,
        name: 'Liste',
        to: '/categories'
      },
      {
        component: CNavItem,
        name: 'Ajouter',
        to: '/categories/ajouter'
      },
    ]
  },
  
  {
    component: CNavGroup,
    name: 'Marques',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />, 
    items : [
      {
        component: CNavItem,
        name: 'Liste',
        to: '/marques'
      },
      {
        component: CNavItem,
        name: 'Ajouter',
        to: '/marques/ajouter'
      },
    ]
  },
  {
    component: CNavGroup,
    name: 'Modèles',
    icon: <CIcon icon={cilCarAlt} customClassName="nav-icon" />, 
    items : [
      {
        component: CNavItem,
        name: 'Liste',
        to: '/modeles'
      },
      {
        component: CNavItem,
        name: 'Ajouter',
        to: '/modeles/ajouter'
      },
    ]
  },
  
  {
    component: CNavGroup,
    name: 'Energies',
    icon: <CIcon icon={cilBolt} customClassName="nav-icon" />, 
    items : [
      {
        component: CNavItem,
        name: 'Liste',
        to: '/energies'
      },
      {
        component: CNavItem,
        name: 'Ajouter',
        to: '/energies/ajouter'
      },
    ]
  },
  {
    component: CNavGroup,
    name: 'Villes',
    icon: <CIcon icon={cilLocationPin} customClassName="nav-icon" />, 
    items : [
      {
        component: CNavItem,
        name: 'Liste',
        to: '/villes'
      },
      {
        component: CNavItem,
        name: 'Ajouter',
        to: '/villes/ajouter'
      },
    ]
  },
  
  {
    component: CNavGroup,
    name: 'Couleurs',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />, 
    items : [
      {
        component: CNavItem,
        name: 'Liste',
        to: '/couleurs'
      },
      {
        component: CNavItem,
        name: 'Ajouter',
        to: '/couleurs/ajouter'
      },
    ]
  },
  
  {
    component: CNavGroup,
    name: 'Boites',
    icon: <CIcon icon={cilClearAll} customClassName="nav-icon" />, 
    items : [
      {
        component: CNavItem,
        name: 'Liste',
        to: '/boites'
      },
      {
        component: CNavItem,
        name: 'Ajouter',
        to: '/boites/ajouter'
      },
    ]
  },
  
  {
    component: CNavGroup,
    name: 'Portes',
    icon: <CIcon icon={cilDoor} customClassName="nav-icon" />, 
    items : [
      {
        component: CNavItem,
        name: 'Liste',
        to: '/portes'
      },
      {
        component: CNavItem,
        name: 'Ajouter',
        to: '/portes/ajouter'
      },
    ]
  },

  {
    component: CNavGroup,
    name: 'Places',
    icon: <CIcon icon={cilApplications} customClassName="nav-icon" />, 
    items : [
      {
        component: CNavItem,
        name: 'Liste',
        to: '/places'
      },
      {
        component: CNavItem,
        name: 'Ajouter',
        to: '/places/ajouter'
      },
    ]
  },

]

export default _nav
