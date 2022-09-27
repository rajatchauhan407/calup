const SuccessBtn = (props) => {
    return(
        <button
            style={{
                width:props.width || '100%',
                color:props.TextColor || 'black',
                backgroundColor:props.backgroundColor || 'green',
                padding: props.padding || ' 5px',
                fontSize: props.fontSize || '20px',
                height: props.height || 'auto',
                margin: props.margin || 'auto',
                outline: 'none',
                borderRadius: '5px',
                border: '0px',
                cursor:props.cursor,
                disabled:props.disabled || 'false'
            }}
            disabled={props.disabled || false}
            
            onClick= {props.onClick}
        >
            {props.text || 'Success'}
        </button>
    )
}

export default SuccessBtn;