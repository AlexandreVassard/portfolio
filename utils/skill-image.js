import aws from "../app/assets/svg/skills/aws.svg";
import javascript from "../app/assets/svg/skills/javascript.svg";
import mysql from "../app/assets/svg/skills/mysql.svg";
import nextJs from "../app/assets/svg/skills/next.js.svg";
import react from "../app/assets/svg/skills/react.svg";
import typescript from "../app/assets/svg/skills/typescript.svg";
import vite from "../app/assets/svg/skills/vite.svg";
import linux from "../app/assets/svg/skills/linux.svg";
import nodeJs from "../app/assets/svg/skills/node.js.svg";
import gitlab from "../app/assets/svg/skills/gitlab.svg";
import github from "../app/assets/svg/skills/github.svg";
import nestjs from "../app/assets/svg/skills/nestjs.svg";
import bash from "../app/assets/svg/skills/bash.svg";
import docker from "../app/assets/svg/skills/docker.svg";
import sqlite from "../app/assets/svg/skills/sqlite.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "sqlite":
      return sqlite;
    case "bash":
      return bash;
    case "gitlab":
      return gitlab;
    case "github":
      return github;
    case "node.js":
      return nodeJs;
    case "nestjs":
      return nestjs;
    case "docker":
      return docker;
    case "javascript":
      return javascript;
    case "next.js":
      return nextJs;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "mysql":
      return mysql;
    case "vite":
      return vite;
    case "aws":
      return aws;
    case "linux":
      return linux;
    default:
      break;
  }
};
