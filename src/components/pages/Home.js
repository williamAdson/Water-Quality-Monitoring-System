import 'bootstrap/dist/css/bootstrap.min.css'

export const Home = () => {
    const projectName = process.env.REACT_APP_PROJECT_NAME;

    return (
        <div className='container'>
            <h1 className='text-center m-2'>{projectName}</h1>
            <h2>Home Page</h2>
            <p>This is the text for the home page</p>
            <div>
                <p style={{ maxWidth: '50rem', lineHeight: '1.5'}}>
                    智能合约功能通过Hyperledger Fabric实现高效透明的中国水质管理，处理数据添加、更新和检索，确保数据准确性和完整性。它们管理参与者注册和授权，促进通过IPFS进行安全的文件存储和共享，并处理利益相关者之间的合同协议。此外，这些功能通过奖励机制激励积极参与，促进全面和协作的水质监测和改进。
                </p>
            </div>
        </div>
    )
}