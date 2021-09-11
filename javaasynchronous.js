const getDataAsync = async () => {
    let response = await fetch("https://api.github.com/users/SalwaNurulAisha");
    let result = await response.json();
  
    const judul = document.getElementById ("judul");
        judul.style.backgroundColor = "#E65BD1";
        judul.style.color = "#DFDFDF";
        judul.style.textAlign = "center";
    const name = document.getElementById("name");
        name.style.fontSize = "32px";
    const username = document.getElementById("username");
    const login = document.getElementById("login");
    const bio = document.getElementById("bio");
    // const node_id = document.getElementById("node_id");
    const avatar = document.getElementById ("avatar");
    const avatarUrl = document.getElementById("avatar_url");
    
    console.log(result);
  
    name.innerHTML = result.name;
    login.innerHTML = result.login;
    bio.innerHTML = result.bio;
    // node_id.innerHTML = result.node_id;
    avatarUrl.src = result.avatar_url;

    document.getElementById('button-test').addEventListener('click', handleClick);
    function handleClick() {
    alert(id.innerHTML = result.id);
}

    document.getElementById('login').addEventListener('mouseover', displayAlert);
    function displayAlert() {
    alert("Untuk melihat lebih banyak data Api Github Saya, bisa dilihat pada inspect > console");
}
  };
  getDataAsync();