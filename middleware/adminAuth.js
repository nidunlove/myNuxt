export default function ({ store, error, redirect }) {
  if (!store.state.authUser) {
    error({
      message: '请先登录~ /adminLogin',
      statusCode: 403
    });
    // return redirect('/adminLogin')
  }
}
