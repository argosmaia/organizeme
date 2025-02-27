import React, {createContext, useEffect, useState} from "react";
import {UserContextType} from "../types/interfaces/UserContextType";

export const UserContext = createContext<UserContextType | null>(null);