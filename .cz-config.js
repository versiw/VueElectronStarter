// https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js

module.exports = {
    types: [
        { value: 'feat', name: 'feat:       ✨ 新功能' },
        { value: 'fix', name: 'fix:        🎯 修复 BUG' },
        { value: 'docs', name: 'docs:       📝 文档变更' },
        { value: 'style', name: 'style:      🪄  代码格式 (不影响代码运行的变动)' },
        { value: 'refactor', name: 'refactor:   🛠️  重构、优化 (既不是增加 Feature，也不是修复 BUG)' },
        { value: 'perf', name: 'perf:       📈 性能优化' },
        { value: 'test', name: 'test:       🧪 增加测试' },
        { value: 'chore', name: 'chore:      🚀 构建过程或辅助工具的变动' },
        { value: 'revert', name: 'revert:     ↩️  回退' },
        { value: 'build', name: 'build:      📦 打包' }
    ],

    // scopes: [{ name: 'accounts' }, { name: 'admin' }, { name: 'exampleScope' }, { name: 'changeMe' }],

    messages: {
        type: '请选择提交类型:',
        // scope: '请输入文件修改范围(可选):',
        customScope: '请输入修改范围(❓可选):',
        subject: '请简要描述提交(❗必选):',
        body: '请输入详细描述(❓可选):',
        footer: '请输入要关闭的issue(❓可选):',
        confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
    },
    allowCustomScopes: true,
    skipQuestions: ['body', 'footer'],
    // subject部分简要描述，默认是72字符，防止换行
    subjectLimit: 72
};