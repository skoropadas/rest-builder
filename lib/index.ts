#!/usr/bin/env node
import * as commander from "commander";
require("./generators");

commander.parse(process.argv);