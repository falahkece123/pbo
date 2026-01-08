<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chrome Hearts Login</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Arial Black', 'Arial Bold', sans-serif;
            background: #0a0a0a;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            position: relative;
            overflow: hidden;
        }
        body::before {
            content: "✟";
            position: absolute;
            font-size: 400px;
            color: #1a1a1a;
            opacity: 0.1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 0;
        }
        .container {
            background: linear-gradient(145deg, #1a1a1a, #0d0d0d);
            padding: 50px 40px;
            border-radius: 10px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1);
            text-align: center;
            max-width: 450px;
            width: 100%;
            border: 2px solid #333;
            animation: fadeIn 0.5s ease-in;
            position: relative;
            z-index: 1;
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }
        .logo {
            font-size: 3em;
            color: #fff;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        }
        h1 {
            color: #fff;
            margin-bottom: 10px;
            font-size: 2em;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        }
        .subtitle {
            color: #888;
            font-size: 0.9em;
            margin-bottom: 30px;
            letter-spacing: 1px;
        }
        .input-group {
            margin-bottom: 20px;
            text-align: left;
        }
        label {
            display: block;
            color: #ccc;
            margin-bottom: 8px;
            font-size: 0.9em;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        input {
            width: 100%;
            padding: 15px;
            background: #0a0a0a;
            border: 2px solid #333;
            border-radius: 5px;
            color: #fff;
            font-size: 16px;
            transition: all 0.3s ease;
        }
        input:focus {
            outline: none;
            border-color: #666;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
        }
        button {
            background: #fff;
            color: #000;
            border: 2px solid #fff;
            padding: 15px 40px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 2px;
            width: 100%;
            margin-top: 10px;
        }
        button:hover {
            background: #000;
            color: #fff;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2);
        }
        button:active {
            transform: translateY(0);
        }
        .warning {
            display: none;
            margin-top: 20px;
            padding: 15px;
            background: #1a0000;
            border: 2px solid #ff0000;
            border-radius: 5px;
            color: #ff6666;
            font-weight: bold;
            animation: shake 0.5s ease-in-out;
        }
        .warning.show {
            display: block;
        }
        .success-screen {
            display: none;
        }
        .success-screen.show {
            display: block;
        }
        .welcome-text {
            font-size: 2.5em;
            color: #fff;
            margin: 30px 0;
            letter-spacing: 3px;
            text-transform: uppercase;
            animation: glow 2s ease-in-out infinite;
        }
        @keyframes glow {
            0%, 100% {
                text-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
                             0 0 20px rgba(255, 255, 255, 0.3);
            }
            50% {
                text-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
                             0 0 30px rgba(255, 255, 255, 0.5);
            }
        }
        .cross-decoration {
            font-size: 4em;
            color: #fff;
            margin: 20px 0;
            animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
                opacity: 1;
            }
            50% {
                transform: scale(1.1);
                opacity: 0.8;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div id="loginScreen">
            <div class="logo">✟</div>
            <h1>Chrome Hearts</h1>
            <div class="subtitle">Exclusive Access</div>
            
            <div class="input-group">
                <label for="username">Username</label>
                <input type="text" id="username" placeholder="Enter username">
            </div>
            
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter password">
            </div>
            
            <button onclick="login()">Login</button>
            
            <div class="warning" id="warning">
                ⚠ Access Denied! Wrong credentials.
            </div>
        </div>
        
        <div class="success-screen" id="successScreen">
            <div class="cross-decoration">✟</div>
            <h1 class="welcome-text">Welcome</h1>
            <h1 class="welcome-text">CHROME HEARTS</h1>
            <h1 class="welcome-text">Gang</h1>
            <div class="cross-decoration">✟</div>
        </div>
    </div>
    
    <script>
        function login() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const warning = document.getElementById("warning");
            const loginScreen = document.getElementById("loginScreen");
            const successScreen = document.getElementById("successScreen");
            
            if (username === "falahkece" && password === "falahkece123") {
                warning.classList.remove("show");
                loginScreen.classList.remove("show");
                loginScreen.style.display = "none";
                successScreen.classList.add("show");
            } else {
                warning.classList.add("show");
                setTimeout(() => {
                    warning.classList.remove("show");
                }, 3000);
            }
        }
        
        document.getElementById("password").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                login();
            }
        });
        
        document.getElementById("username").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                document.getElementById("password").focus();
            }
        });
    </script>
</body>
</html>
