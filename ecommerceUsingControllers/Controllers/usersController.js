const fetchAllUsers=(req,res)=>{
    res.json("Fetching all users");   
};

const addUser=(req,res)=>{
    res.json("Adding a new user");
};

const getUserWithId=(req,res)=>{
    const userId=req.params.id;
    res.json(`Fetching user with ID: ${userId}`);
};

module.exports={
    fetchAllUsers,
    addUser,
    getUserWithId
};