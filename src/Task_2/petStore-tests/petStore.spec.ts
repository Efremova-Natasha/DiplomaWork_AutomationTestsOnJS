import assert from "assert";
import superagent from "superagent";
import { Response } from "superagent";
import { PET_STATUS } from "../constant";

let response: Response;

const minValue = 1;
const maxValue = 100;
const idValue = Number((Math.random() * (maxValue - minValue) + minValue).toFixed(0));

const urlLink = "https://petstore.swagger.io/v2/pet";

describe("API testing of Swagger PetStore website", () => {
    describe("POST method", () => {
        it("Add new pet to the store", async () => {
            const body = {
                "id": idValue,
                "category": {
                    "id": 1,
                    "name": "cat"
                },
                "name": "Sipa",
                "photoUrls": [
                    ""
                ],
                "tags": [
                    {
                        "id": 2,
                        "name": "cat"
                    }
                ],
                "status": "available"
            };
            try {
                response = await superagent.post(`${urlLink}`)
                    .set('Content-Type', 'application/json')
                    .send(body);
            } catch (error: any) {
                throw new Error(error.message);
            }
            assert.deepEqual(response.statusCode, 200);
            assert.deepEqual(response.body.name, 'Sipa');
            assert.deepEqual(response.body.id, idValue);
        });
    });
    describe("GET method", () => {
        it("Get pet by ID", async () => {
            try {
                response = await superagent.get(`${urlLink}/${idValue}`)
            } catch (error: any) {
                throw new Error(error.message);
            }
            assert.deepEqual(response.statusCode, 200);
            assert.deepEqual(response.body.name, 'Sipa');
            assert.deepEqual(response.body.id, idValue);
        });

        it("Get a non-exist pet in the store", async () => {
            try {
                response = await superagent.get(`${urlLink}/kl`);
            } catch (error: any) {
                assert.deepEqual(error.status, 404);
                assert.deepEqual(error.message, 'Not Found');
            }
        });

        it("Get a pet list by non-exist status", async () => {
            try {
                response = await superagent.get(`${urlLink}/findByStatus?status=${PET_STATUS.SOLD}`);
            } catch (error: any) {
                throw new Error(error.message);
            }
            assert.deepEqual(response.status, 200);
            assert.deepEqual(response.body[0].status, PET_STATUS.SOLD);
        });
    });
    describe("PUT method", () => {
        it("Update an existed pet", async () => {
            const body = {
                "id": idValue,
                "category": {
                    "id": 1,
                    "name": "cat"
                },
                "name": "Masha",
                "photoUrls": [
                    ""
                ],
                "tags": [
                    {
                        "id": 2,
                        "name": "cat"
                    }
                ],
                "status": "available"
            };

            try {
                response = await superagent.put(`${urlLink}`)
                    .set('Content-Type', 'application/json')
                    .send(body)
            } catch (error: any) {
                throw new Error(error.message);
            }
            assert.deepEqual(response.statusCode, 200);
            assert.deepEqual(response.body.id, idValue);
            assert.deepEqual(response.body.name, 'Masha');
        });
    });
    describe("DELETE method", () => {
        it("Delete a pet from the store", async () => {
            try {
                response = await superagent.delete(`${urlLink}/${idValue}`)
                    .set('accept', 'application/json')
            } catch (error: any) {
                throw new Error(error.message);
            }
            assert.deepEqual(response.statusCode, 200);
        });

        it("Delete a non-exist pet from the store", async () => {
            try {
                response = await superagent.delete(`${urlLink}/${idValue}`)
                    .set('accept', 'application/json')
            } catch (error: any) {
                assert.deepEqual(error.status, 404);
                assert.deepEqual(error.message, 'Not Found')
            }
        });
    });
})