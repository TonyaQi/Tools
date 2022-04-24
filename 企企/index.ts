/**
* 编辑器完整的数据状态
*/
interface EditorState {
    /**
    * 编辑器中所有节点的映射
    * key:Node 的 id
    * value:Node
    */
    nodes: Record<NodeId, Node>
}
/*
* 编辑器中一个节点其 ID 的类型 */
type NodeId = string
/*
* 编辑器节点类型 */
interface Node {
    // 节点ID，每一个节点的ID是唯一的 
    id: NodeId
    // 父节点ID
    parent: NodeId
    // 子节点 ID 数组 
    nodes?: NodeId[] // 根据题目所给的数据 修改了一处数据类型
    // 自定义节点类型名称 
    name: string
}

const generatorId = (id: string) => {
    // 题目中已提供的方法
    // 为了便于查看输出结果 根据示例方式 返回copy-nodeId
    
    return 'copy' + id;
}
class NodeHandle {
    editorState: EditorState
    curCopyId: NodeId
    constructor(init) {
        this.editorState = init;
        this.curCopyId;
    }

    private deepCopy(node: Node, parentId: NodeId): {
        id: NodeId // 被复制的节点的新id,
        nodes: Record<NodeId, Node> // 复制的节点s;
    } {
        if(!node) return;
        const newId = generatorId(node.id);
        const newCode = {
            id: newId,
            name: node.name,
            parent: parentId,
        } as Node;

        let copyNodes: Record<NodeId, Node> = {};
        let copyIds: NodeId[] = [];

        if(node.nodes) {
            node.nodes.forEach((nodeId) => {
                // 复制子节点
                const tmpNodeInfo = this.deepCopy(this.editorState.nodes[nodeId], newId);

                copyIds.push(tmpNodeInfo.id);
                copyNodes = Object.assign(copyNodes, tmpNodeInfo.nodes);
            });
        }

        if(copyIds.length) newCode.nodes = copyIds;
        
        return {
            id: newId,
            nodes: Object.assign({
                [newId]: newCode
            }, copyNodes)
        };
    };

    copy(id: NodeId){
        this.curCopyId = id;
    }

    paste(pastedId: NodeId){
        // paste 时触发节点build 以防浪费不必要的性能
        const copyNode = this.editorState.nodes[this.curCopyId];
        // workInMemoryList
        const workInMMNodeList = this.deepCopy(copyNode, pastedId);

        const pastedNode = this.editorState.nodes[pastedId];
        pastedNode.nodes = pastedNode.nodes.concat(workInMMNodeList.id);
        this.editorState.nodes = Object.assign(this.editorState.nodes, workInMMNodeList.nodes);
    }

    getState() {
        return this.editorState;
    }
}

const handle = new NodeHandle({
    nodes: {
        "0": {
            id: "0",
            name: "ROOT",
            nodes: ["1", "2"]
        },
        "1": {
            id: "1",
            name: "Node-1",
            nodes: [],
            parent: "0"
        },
        "2": {
            id: "2",
            name: "Node-2",
            nodes: ["3", "4"],
            parent: "0",
        }, 
        "3": {
            id: "3",
            name: "Node-3",
            nodes: ["5"],
            parent: "2"
        }, 
        "4": {
            id: "4",
            name: "Node-4",
            parent: "2"
        },
        "5": {
            id: "5",
            name: "Node-5",
            parent: "3"
        }
    }
})

handle.copy('2');
handle.paste('1');