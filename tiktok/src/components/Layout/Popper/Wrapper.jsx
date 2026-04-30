

function Wrapper({children}) { // children là props đặc biệt 
// của React, nó sẽ chứa tất cả các phần tử con được đặt
// bên trong component này khi sử dụng
// truyền giá trị cho children sẽ giúp chúng ta có thể tái sử dụng component này
    return ( 
        <div className="wrapper">
            {children}
        </div>
     );
}

export default Wrapper;