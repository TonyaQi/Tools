function createElement (type, config, ...children) {
    const [key, ref] = config;
    return {
        $$typeof: Symbol('ReactElement'),
        type: type,
        props: {
            ...config,
            children: children
        }
        key, 
        ref
    }
};

const vNode = createElement("div", {className: 'xx'}, 'helloword');

const render = (vnode, container) => {
    const root = container;
    const fiberRoot = {
        stateNode: container,
        props: {
            children: [vnode]
        }
    }

    reconcileChildren(root, props.children);
}

const createFiber = (container) => {

}

const reconcileChildren = () => {

}