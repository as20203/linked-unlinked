
// find all the users that have not been linked
const getUnlinkedUsers = (companyUsers, linkedUsers) => {
    const unlinkedUsers = companyUsers.filter( ({ id }) => !linkedUsers.map(({ id }) => id).includes(id));
    return unlinkedUsers;
}
