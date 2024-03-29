import { encodeQuery } from "../helpers/queryEncoder.js";
import { jsonRequest } from "./../helpers/jsonRequest.js";

let baseUrl = 'http://localhost:3030/data/members';

async function getAll() {

    let result = await jsonRequest(baseUrl);
    return result;

}

async function get(id) {

    let result = await jsonRequest(`${baseUrl}/${id}`);
    return result;

}

async function create(item) {

    let result = await jsonRequest(baseUrl, 'Post', item, true);
    return result;
}

async function update(item, id) {

    let result = await jsonRequest(`${baseUrl}/${id}`, 'Put', item, true);
    return result;
}

async function deleteItem(id) {

    let result = await jsonRequest(`${baseUrl}/${id}`, 'Delete', undefined, true);
    return result;
}

async function getMembers() {

    let queryObj = {
        where: `status="member"`
    }

    let query = encodeQuery(queryObj);
    // let query = '?where=status%3D%22member%22';
    let result = await jsonRequest(`${baseUrl}?${query}`);
    return result;
}
async function getMembershipsForTeam(teamId) {
    let queryObj = {
        where: `teamId="${teamId}"`,
    }

    let query =encodeQuery(queryObj);
    let result = await jsonRequest(`${baseUrl}?${query}`);
    return result;
}

async function getMembersForTeamWithTeamData(teamId) {
    let queryObj = {
        where: `teamId="${teamId}"`,
        load: `team=teamId:teams`
    }

    let query =encodeQuery(queryObj);
    let result = await jsonRequest(`${baseUrl}?${query}`);
    return result;
}
///data/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers
async function getMembersForTeamWithUser(teamId) {
    
    let queryObj = {
        where: `teamId="${teamId}"`,
        load: `user=_ownerId:users`
    }

    let query =encodeQuery(queryObj);
    let result = await jsonRequest(`${baseUrl}?${query}`);
    return result;
}

export default {

    getAll,
    get,
    create,
    update,
    deleteItem,
    getMembers,
    getMembersForTeamWithTeamData,
    getMembershipsForTeam,
    getMembersForTeamWithUser

}