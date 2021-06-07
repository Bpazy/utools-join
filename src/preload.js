import { execSync } from 'child_process';

window.exports = {
    "join": {
        mode: "list",
        args: {
            enter: (action, callbackSetList) => {
                callbackSetList([
                    {
                        title: '英文逗号分隔',
                        description: '将多行数据按英文逗号分隔',
                        icon: ''
                    }
                ]);
            },
            select: (action, itemData, callbackSetList) => {
                window.utools.hideMainWindow();
                const text = execSync('powershell -command "Get-Clipboard"').toString("utf8").trim();
                console.log(`读取剪切板数据: ${text}`);
                const newText = text.split(/\s+/).join();
                console.log(`写入剪切板数据: ${newText}`);
                execSync(`powershell -command "Set-Clipboard '${newText}'"`);
                window.utools.outPlugin();
            },
            placeholder: "搜索"
        }
    }
}
