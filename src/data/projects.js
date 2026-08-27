import HousTalib from "../assets/HousTalib.png";
import MAYASOL from "../assets/MAYASOL.png";
import ToDoList from "../assets/ToDoList.png";
import MyWeather from "../assets/MyWeather.png";
import TicTacToe from "../assets/TicTacToe.png";

import housTalibPreview from "../assets/HousTalib/housTalibPreview.webp";
import housTalibHome from "../assets/HousTalib/housTalibHome.webp";
import housTalibSearch from "../assets/HousTalib/housTalibSearch.webp";
import housTalibFeatures from "../assets/HousTalib/housTalibFeatures.webp";
import housTalibMobile from "../assets/HousTalib/housTalibMobile.webp";

import weatherPreview from "../assets/Weather/weatherPreview.webp";
import weatherAppAR from "../assets/Weather/weatherAppAR.webp";
import weatherAppFR from "../assets/Weather/weatherAppFR.webp";
import weatherAppMobile from "../assets/Weather/weatherAppMobile.webp";

import mayasolPreview from "../assets/MAYASOL/mayasolPreview.webp";
import mayasolHome from "../assets/MAYASOL/mayasolHome.webp";
import mayasolProducts from "../assets/MAYASOL/mayasolProducts.webp";
import mayasolCarts from "../assets/MAYASOL/mayasolCarts.webp";
import mayasolMobile from "../assets/MAYASOL/mayasolMobile.webp";

import toDoListPreview from "../assets/ToDoList/toDoListPreview.webp";
import toDoListStart from "../assets/ToDoList/toDoListStart.webp";
import toDoListAllTasks from "../assets/ToDoList/toDoListAllTasks.webp";
import toDoListIncomplete from "../assets/ToDoList/toDoListIncomplete.webp";
import toDoListComplete from "../assets/ToDoList/toDoListComplete.webp";
import toDoListDelete from "../assets/ToDoList/toDoListDelete.webp";

import tic1 from "../assets/TicTacToe/tic1.webp";
import tic2 from "../assets/TicTacToe/tic2.webp";
import tic3 from "../assets/TicTacToe/tic3.webp";

export const projects = [
  {
    id: 1,
    slug: "hous-talib",
    title: "projects.housTalib.title",
    description: "projects.housTalib.description",
    translationKey: "projects.housTalib",
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
    images: [
      { src: housTalibPreview, alt: "projects.housTalib.images.preview" },
      { src: housTalibHome, alt: "projects.housTalib.images.home" },
      { src: housTalibSearch, alt: "projects.housTalib.images.search" },
      { src: housTalibFeatures, alt: "projects.housTalib.images.features" },
      { src: housTalibMobile, alt: "projects.housTalib.images.mobile" },
    ],
  },

  {
    id: 2,
    slug: "mayasol",
    title: "projects.mayaSol.title",
    description: "projects.mayaSol.description",
    translationKey: "projects.mayaSol",
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
    images: [
      { src: mayasolPreview, alt: "projects.mayaSol.images.preview" },
      { src: mayasolHome, alt: "projects.mayaSol.images.home" },
      { src: mayasolProducts, alt: "projects.mayaSol.images.products" },
      { src: mayasolCarts, alt: "projects.mayaSol.images.carts" },
      { src: mayasolMobile, alt: "projects.mayaSol.images.mobile" },
    ],
  },

  {
    id: 3,
    slug: "todo-list",
    title: "projects.todoList.title",
    description: "projects.todoList.description",
    translationKey: "projects.todoList",
    technologies: ["React", "Material UI"],
    githubUrl: "https://github.com/omar-zguit-hub/React-todolist",
    liveUrl: "https://mytaskifyplanner.netlify.app/",
    image: ToDoList,
    images: [
      { src: toDoListPreview, alt: "projects.todoList.preview" },
      { src: toDoListStart, alt: "projects.todoList.start" },
      { src: toDoListAllTasks, alt: "projects.todoList.all" },
      { src: toDoListIncomplete, alt: "projects.todoList.incom" },
      { src: toDoListComplete, alt: "projects.todoList.com" },
      { src: toDoListDelete, alt: "projects.todoList.delete" },
    ],
  },

  {
    id: 4,
    slug: "weather-app",
    title: "projects.weather.title",
    description: "projects.weather.description",
    translationKey: "projects.weather",
    technologies: ["React", "Material UI", "OpenWeatherMap API"],
    githubUrl: "https://github.com/omar-zguit-hub/Weather-Now",
    liveUrl: "https://weatherscopenow.netlify.app/",
    image: MyWeather,
    images: [
      { src: weatherPreview, alt: "projects.weather.preview" },
      { src: weatherAppAR, alt: "projects.weather.ar" },
      { src: weatherAppFR, alt: "projects.weather.fr" },
      { src: weatherAppMobile, alt: "projects.weather.mobile" },
    ],
  },

  {
    id: 5,
    slug: "tic-tac-toe",
    title: "projects.ticTacToe.title",
    description: "projects.ticTacToe.description",
    translationKey: "projects.ticTacToe",
    technologies: ["React", "Material UI"],
    githubUrl: "https://github.com/omar-zguit-hub/Tic-Tac-Toe",
    liveUrl: "https://three-in-arow.netlify.app/",
    image: TicTacToe,
    images: [
      { src: tic1, alt: "projects.ticTacToe.to" },
      { src: tic2, alt: "projects.ticTacToe.do" },
      { src: tic3, alt: "projects.ticTacToe.list" },
    ],
  },
];
