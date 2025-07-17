---
title: 脚手架
order: 1
group:
  title: 项目
---

## 资料

[代码仓](https://gitee.com/wangleigege/gaiwen-cli)

- monorepo：https://pnpm.io/workspaces
- eslint：https://eslint.org/docs/latest/use/configure/configuration-files
- stylelint：https://stylelint.io/
- spell check：https://cspell.org/
- commitlint：https://commitlint.js.org/
- git 钩子拦截：https://typicode.github.io/husky/
- typescript cli template：https://github.com/kucherenko/cli-typescript-starter
- rspack-cli：https://github.com/web-infra-dev/rspack/tree/main/packages/rspack-cli
- 核心依赖
  - commander：https://github.com/tj/commander.js
  - picocolors：https://github.com/alexeyraspopov/picocolors
  - prompts：https://github.com/terkelg/prompts
  - consola：https://github.com/unjs/consola
  - giget：https://github.com/unjs/giget
  - ora：https://github.com/sindresorhus/ora
  - fs-extra：https://github.com/jprichardson/node-fs-extra

## 项目需求评审

### 背景介绍

在企业级软件开发过程中，开发团队通常面临规范化、流程化和自动化的挑战。命令行工具能够有效解决这些问题，它的作用体现在以下几个方面：

### 规范化问题

- 项目开发中，代码风格、目录结构、组件命名等方面容易因个人习惯而不一致，导致项目的整体质量下降，维护成本上升。
- 规范化的需求不仅涉及代码层面，还包括项目构建、依赖管理、测试框架的使用等各个方面。

### 流程化问题

- 大型项目通常涉及多个子系统或模块，开发流程复杂，人工操作容易出错或漏操作。
- 在项目初始化、环境配置、依赖安装、测试、部署等流程中，如果没有统一的流程指导和工具辅助，容易出现流程混乱，效率低下的问题。

###   自动化问题

- 随着项目复杂度的增加，手动处理日常开发中的重复性工作不仅耗时耗力，还容易引入人为错误。
- 自动化工具能够帮助团队在开发、测试、构建、部署等环节减少重复劳动，提高工作效率，确保质量的一致性。

工程化设计主要就是在考虑工程的架构设计、规范化、流程化、自动化问题，我们并不会每个项目都完全从零到一去配置相关约束，因而我们期望将这些内容标准化而后封装到命令行工具中，后续使用只需一个命令即可完成相关操作。
  就比如我们想创建一个 vue 项目，那么我们可以使用 create-vue，如果我们想创建一个 react 项目，那么我们可以使用 create-react-app，这些脚手架工具，提供给了开发者非常便捷的功能。

## 核心流程

命令行工具的核心流程一般包括以下几个方面：

1. 项目初始化：
   - 生成统一的项目结构，创建必要的目录和文件模板。
   
   - 初始化配置文件（如package.json、.gitignore、README.md等）。
   
   - 设置默认的代码风格和Lint规则，保证代码的统一性。
   
2. 依赖管理：
   - 自动安装项目的必备依赖，如框架、库、插件等。
   - 提供更新依赖的命令，方便统一管理和升级项目中的依赖版本。

3. 开发流程管理：
   - 提供一系列命令来管理开发流程，如启动开发服务器、运行测试、构建项目等。
   - 对开发流程进行规范化，确保所有开发人员遵循相同的流程。

4. 代码质量控制：

   - 集成Lint、格式化工具，提供一键运行的命令来检查和修复代码中的问题。

   - 集成静态分析工具，帮助开发人员在编码阶段发现潜在的问题。

5. 自动化构建与部署：
   - 提供打包构建命令，统一处理代码的编译、压缩等操作。
   - 集成部署工具或配置，自动化处理不同环境下的部署工作。



## 命令设计

命令行工具的设计需要围绕上述核心流程来构建，通常包含以下主要命令：

1. `create`: 用于初始化新项目，生成基本的项目结构和必要的配置文件。
2. `info`: 输出脚手架相关信息
3. `serve`：启动项目，在本地启动
4. `build`: 构建项目，生成可部署的生产环境代码
5. `preview`：本地启动一个服务，查看构建后产物加载效果
6. `lint`: 检查代码风格和质量，报告并修复不符合规范的代码
7. `deploy`: 部署项目到指定的环境中，如开发环境、测试环境、生产环境等
8. `test`: 运行测试用例，确保代码的正确性和健壮性

## 核心依赖

```bash
"tsup": "8.2.4",
"commander": "12.1.0",
"picocolors": "1.0.1",
"prompts": "2.4.2",
"consola": "3.2.3",
"giget": "1.2.3",
"ora": "8.0.1",
"fs-extra": "11.2.0"
```

## 设计要点

### 项目结构

- 项目采用了Monorepo架构，通过 pnpm 和 turbo 实现包管理和任务调度，多个package（如 cli、core）共享配置文件和依赖。
- apps 和 packages 目录分别用于存放应用程序和模块化包，方便代码的组织和管理。

### 依赖管理与工作流自动化

- pnpm-workspace.yaml：用于配置 pnpm 工作空间，确保多个 package 之间共享依赖和一致的版本管理。
- turbo.json：配置任务调度工具 TurboRepo，优化构建和测试任务，减少重复操作，提升开发效率。
- husky：配置 Git hooks，如 pre-commit、commit-msg 等，保证代码提交质量。

### 代码质量与规范

- .editorconfig 和 .prettierrc：保证代码格式的一致性。
- eslint.config.mjs：配置 ESLint 静态代码分析，确保代码风格和质量。
- commitlint.config.cjs：配置 commitlint，规范 Git 提交信息格式。

### 多模板支持

- packages/cli/templates/ 目录下存放了多种模板（React、Vue、Vanilla等），支持不同框架和语言（如 TypeScript）的项目初始化。
- src/commands/ 目录下的 build.ts, create.ts 等脚本用于实现 CLI 命令，提供模板生成、项目构建等功能。

### CLI 工具

- commander: 用于解析命令行输入，定义和处理 CLI 命令。
- prompts: 用于实现交互式命令行界面，获取用户输入。
- ora: 提供 CLI 中的加载动画效果，提升用户体验。
- consola: 用于优化日志输出，便于调试和用户反馈。

### 工具与辅助函数

- picocolors: 提供终端颜色输出支持，提升 CLI 工具的用户可读性。
- fs-extra: 用于增强文件系统操作能力，简化文件读写、拷贝等常见任务。
- giget: 用于下载并管理模板代码，支持从 GitHub 等来源获取项目模板。

### TypeScript 配置

- 项目使用 TypeScript 进行开发，通过 tsconfig.json 配置编译选项，确保类型安全和代码可维护性。
- tsup 用于打包 TypeScript 项目，生成用于发布的 JavaScript 文件。

## 命令插件化设计

### 插件化设计

尽量将命令设计为插件，这样会给开发者带来很多好处，例如：

1. 命令职责单一
2. 利于新命令开发
3. 完整命令生命周期管理

### 基础概念

插件化机制是一种很常用的软件设计模式，它允许软件系统通过加载外部插件（即功能模块）来扩展其功能，而无需修改核心系统代码。
这种机制使得系统的扩展变得灵活且易于维护，特别适合那些功能复杂、需要频繁扩展和更新的软件。

### 插件化机制的优势

- 模块化：每个命令模块（如 info, build, serve 等）都是独立的，拥有自己的实现逻辑。这使得代码更易于维护和理解。
- 可扩展性：可以通过添加新的命令模块来扩展功能，而无需修改 index.ts 中的核心逻辑。
- 灵活性：因为 registerCommand 只需传入一个函数（返回 Command 对象），这意味着新的命令可以来自任何地方，例如从第三方插件或动态加载的模块。

### registerCommand.ts

这个文件非常关键，他负责了整个命令行工具的命令注册工作，当然，在此之前需要明确一点，那就是插件的数据定义，也称为插件的协议。只有定义好了插件协议，插件注册机制才能得以实现。

这里相对简化了插件，其实插件就是返回 Command 的函数，设计两块协议，一个是 registerCommand 接收注册插件的参数协议，另外就是 Command 协议。

```ts
import { program, Command } from 'commander'

type Fn = (p: Command) => Command

// 负责插件的注册
export function registerCommand(fn1: Fn) {
    program.addCommand(fn1(program))
}
```

#### info模块

```ts
import pc from 'picocolors'
import { logger } from '../../utils/logger'
import pkg from '../../../package.json'
import { Command } from 'commander'

export function info(program: Command) {
    return program
        .createCommand('info')
        .description('show gwc CLI info')
        .action(async () => {
            // 打印日志
            // console.log()
            const oraD = await import('ora')
            const ora = oraD.default ? oraD.default : oraD;
            logger.info('Using consola 3.0.0')
            logger.start('Building project...')
            logger.warn('A new version of consola is available: 3.0.1')
            logger.success('Project built!')
            // consola.error(new Error('This is an example error. Everything is fine!'))
            logger.box('gaiwen')
            // 颜色控制

            logger.log(pc.white(pc.white(`Product: gaiwen CLI v${pkg.version}`)))
            logger.log(pc.green('Author: wl2'), pc.red('Author: wlc'))
            logger.log(pc.underline('Website: https://www.baidu.com'))
            const spinner = ora('Loading unicorns').start();

            setTimeout(() => {
                spinner.color = 'yellow';
                spinner.text = 'Loading rainbows';
            }, 1000);
            setTimeout(() => {
               spinner.stop()
            }, 3000);

        })
}
```

#### 注册

```ts
import { info } from './base/info'
/**
 * 注册打印信息命令
 */
registerCommand(info)
```

## 功能要点

