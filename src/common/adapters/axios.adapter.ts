import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "../interfaces/http-adapter.interface";
import { PokeResponse } from "src/seed/interfaces/poke-response.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AxiosAdapter implements HttpAdapter {

    private axios: AxiosInstance = axios; // readonly

    async get<T>(url: string): Promise<T> {

        try {

            const { data } = await this.axios.get<T>( url );
            return data;

        } catch (error) {
            throw new Error("Ha ocurrido un error al realizar la petición - Comprobar los logs...");
        }
    }

}