import HousTalib from "../assets/HousTalib.png";
import MAYASOL from "../assets/MAYASOL.png";
import ToDoList from "../assets/ToDoList.png";
import MyWeather from "../assets/MyWeather.png";
import TicTacToe from "../assets/TicTacToe.png";

import h1 from "../assets/HousTalib/h1.png";
import h2 from "../assets/HousTalib/h2.png";
import h3 from "../assets/HousTalib/h3.png";
import h4 from "../assets/HousTalib/h4.png";
import h5 from "../assets/HousTalib/h5.png";

import w1 from "../assets/Weather/w1.png";
import w2 from "../assets/Weather/w2.png";
import w3 from "../assets/Weather/w3.png";
import w4 from "../assets/Weather/w4.png";

import m1 from "../assets/MAYASOL/m1.png";
import m2 from "../assets/MAYASOL/m2.png";
import m3 from "../assets/MAYASOL/m3.png";
import m4 from "../assets/MAYASOL/m4.png";
import m5 from "../assets/MAYASOL/m5.png";

import todo1 from "../assets/ToDoList/todo1.png";
import todo2 from "../assets/ToDoList/todo2.png";
import todo3 from "../assets/ToDoList/todo3.png";
import todo4 from "../assets/ToDoList/todo4.png";
import todo5 from "../assets/ToDoList/todo5.png";
import todo6 from "../assets/ToDoList/todo6.png";

import tic1 from "../assets/TicTacToe/tic1.png";
import tic2 from "../assets/TicTacToe/tic2.png";
import tic3 from "../assets/TicTacToe/tic3.png";

export const projects = [
  {
    id: 1,
    title: "HousTalib : Plateforme de logement étudiant",
    description:
      "Une plateforme web full-stack qui met en relation les étudiants et les propriétaires afin de faciliter la recherche et la location de logements étudiants.",
    technologies: [
      "React",
      "Redux Toolkit",
      "Laravel",
      "MySQL",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/omar-zguit-hub/HousTalib",
    liveUrl: "",
    image: HousTalib,
    images: [h1, h2, h3, h4, h5],
  },

  {
    id: 2,
    title: "MAYASOL : Plateforme E-Commerce",
    description:
      "Une application e-commerce full-stack permettant de consulter les produits, gérer le panier, passer des commandes et gérer les produits via une interface d'administration.",
    technologies: [
      "React",
      "Redux Toolkit",
      "Laravel",
      "MySQL",
      "REST API",
      "Material UI",
    ],
    githubUrl: "https://github.com/abderrahmanetaha7-lgtm/solar_stage",
    liveUrl: "",
    image: MAYASOL,
    images: [m1, m2, m3, m4, m5],
  },

  {
    id: 3,
    title: "Application Liste de tâches",
    description:
      "Une application de gestion des tâches permettant aux utilisateurs de créer, organiser, modifier, terminer et gérer leurs tâches quotidiennes grâce à une interface simple.",
    technologies: ["React", "Material UI"],
    githubUrl: "https://github.com/omar-zguit-hub/React-todolist",
    liveUrl: "https://mytaskifyplanner.netlify.app/",
    image: ToDoList,
    images: [todo1, todo2, todo3, todo4, todo5, todo6],
  },

  {
    id: 4,
    title: "Application Météo",
    description:
      "Une application météo responsive permettant aux utilisateurs de rechercher des villes et de consulter les conditions météorologiques actuelles grâce à une API météo.",
    technologies: ["React", "Material UI", "OpenWeatherMap API"],
    githubUrl: "https://github.com/omar-zguit-hub/Weather-Now",
    liveUrl: "https://weatherscopenow.netlify.app/",
    image: MyWeather,
    images: [w1, w2, w3, w4],
  },

  {
    id: 5,
    title: "Jeu Tic-Tac-Toe",
    description:
      "Un jeu classique de Tic-Tac-Toe développé avec React, avec un gameplay interactif, une gestion de l'état du jeu et une interface utilisateur responsive.",
    technologies: ["React", "Material UI"],
    githubUrl: "https://github.com/omar-zguit-hub/Tic-Tac-Toe",
    liveUrl: "https://three-in-arow.netlify.app/",
    image: TicTacToe,
    images: [tic1, tic2, tic3],
  },
];
