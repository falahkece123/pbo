<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Courier New', monospace;
            background: #0a0a0a;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
        }

        body::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
            z-index: 0;
        }

        .login-container {
            background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
            padding: 60px 50px;
            border-radius: 2px;
            box-shadow: 
                0 25px 60px rgba(0, 0, 0, 0.8),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
            width: 100%;
            max-width: 420px;
            position: relative;
            z-index: 1;
            border: 1px solid #333;
        }

        .logo {
            text-align: center;
            margin-bottom: 50px;
            position: relative;
        }

        .cross-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 30px;
            margin-bottom: 30px;
        }

        .cross-symbol {
            font-size: 60px;
            color: #fff;
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
            animation: glow 3s ease-in-out infinite;
        }

        @keyframes glow {
            0%, 100% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.3); }
            50% { text-shadow: 0 0 30px rgba(255, 255, 255, 0.5); }
        }

        .decorative-line {
            height: 1px;
            background: linear-gradient(90deg, transparent, #666, transparent);
            margin: 30px 0;
        }

        .form-group {
            margin-bottom: 30px;
            position: relative;
        }

        label {
            display: block;
            margin-bottom: 12px;
            color: #999;
            font-size: 11px;
            letter-spacing: 3px;
            text-transform: uppercase;
            font-weight: 600;
        }

        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 16px 20px;
            border: 1px solid #333;
            background: #0a0a0a;
            color: #fff;
            font-size: 15px;
            font-family: 'Courier New', monospace;
            transition: all 0.4s ease;
            letter-spacing: 1px;
        }

        input[type="text"]:focus,
        input[type="password"]:focus {
            outline: none;
            border-color: #666;
            background: #0f0f0f;
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.05);
        }

        input::placeholder {
            color: #444;
        }

        .btn-login {
            width: 100%;
            padding: 18px;
            background: #fff;
            color: #000;
            border: none;
            font-size: 13px;
            font-weight: 900;
            letter-spacing: 4px;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Courier New', monospace;
            margin-top: 20px;
            position: relative;
            overflow: hidden;
        }

        .btn-login::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: #000;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }

        .btn-login:hover::before {
            width: 300px;
            height: 300px;
        }

        .btn-login:hover {
            color: #fff;
        }

        .btn-login span {
            position: relative;
            z-index: 1;
        }

        .btn-login:active {
            transform: scale(0.98);
        }

        .warning {
            background: linear-gradient(135deg, #2a2a2a, #1a1a1a);
            color: #fff;
            padding: 18px;
            margin-bottom: 25px;
            text-align: center;
            font-weight: 600;
            letter-spacing: 2px;
            font-size: 12px;
            display: none;
            border: 1px solid #444;
            animation: slideDown 0.4s ease, shake 0.5s;
        }

        .warning.show {
            display: block;
        }

        @keyframes slideDown {
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
            10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
            20%, 40%, 60%, 80% { transform: translateX(8px); }
        }

        .corner-accent {
            position: absolute;
            width: 40px;
            height: 40px;
            border: 1px solid #333;
        }

        .corner-accent.top-left {
            top: -1px;
            left: -1px;
            border-right: none;
            border-bottom: none;
        }

        .corner-accent.top-right {
            top: -1px;
            right: -1px;
            border-left: none;
            border-bottom: none;
        }

        .corner-accent.bottom-left {
            bottom: -1px;
            left: -1px;
            border-right: none;
            border-top: none;
        }

        .corner-accent.bottom-right {
            bottom: -1px;
            right: -1px;
            border-left: none;
            border-top: none;
        }

        .input-wrapper {
            position: relative;
        }

        .input-wrapper::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, #fff, transparent);
            transition: width 0.4s;
        }

        .input-wrapper:focus-within::after {
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <div class="corner-accent top-left"></div>
        <div class="corner-accent top-right"></div>
        <div class="corner-accent bottom-left"></div>
        <div class="corner-accent bottom-right"></div>
        
        <div class="logo">
            <div class="cross-container">
                <div class="cross-symbol">✟</div>
            </div>
        </div>
        
        <div class="decorative-line"></div>
        
        <div id="warning" class="warning">
            ⚠ AKSES DITOLAK
        </div>
        
        <form id="loginForm">
            <div class="form-group">
                <label for="username">Username</label>
                <div class="input-wrapper">
                    <input type="text" id="username" name="username" placeholder="Enter username" required>
                </div>
            </div>
            
            <div class="form-group">
                <label for="password">Password</label>
                <div class="input-wrapper">
                    <input type="password" id="password" name="password" placeholder="Enter password" required>
                </div>
            </div>
            
            <button type="submit" class="btn-login">
                <span>✟ MASUK ✟</span>
            </button>
        </form>
    </div>

    <script>
        const loginForm = document.getElementById('loginForm');
        const warningDiv = document.getElementById('warning');
        const correctUsername = 'falahkece';
        const correctPassword = 'falahkece123';

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (username === correctUsername && password === correctPassword) {
                warningDiv.classList.remove('show');
                alert('✟ AKSES DITERIMA ✟');
                loginForm.reset();
            } else {
                warningDiv.classList.add('show');
                setTimeout(() => {
                    warningDiv.classList.remove('show');
                }, 3000);
            }
        });
    </script>
</body>
</html>
