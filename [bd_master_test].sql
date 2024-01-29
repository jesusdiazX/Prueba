USE [bd_master_test]
GO
/****** Object:  StoredProcedure [dbo].[updArticulos]    Script Date: 29/01/2024 4:17:27 ******/
DROP PROCEDURE IF EXISTS [dbo].[updArticulos]
GO
/****** Object:  StoredProcedure [dbo].[GetArticulosId]    Script Date: 29/01/2024 4:17:27 ******/
DROP PROCEDURE IF EXISTS [dbo].[GetArticulosId]
GO
/****** Object:  StoredProcedure [dbo].[GetArticulos]    Script Date: 29/01/2024 4:17:27 ******/
DROP PROCEDURE IF EXISTS [dbo].[GetArticulos]
GO
/****** Object:  StoredProcedure [dbo].[delArticulos]    Script Date: 29/01/2024 4:17:27 ******/
DROP PROCEDURE IF EXISTS [dbo].[delArticulos]
GO
/****** Object:  StoredProcedure [dbo].[CrudTiendaArt]    Script Date: 29/01/2024 4:17:27 ******/
DROP PROCEDURE IF EXISTS [dbo].[CrudTiendaArt]
GO
/****** Object:  StoredProcedure [dbo].[CrudTienda]    Script Date: 29/01/2024 4:17:27 ******/
DROP PROCEDURE IF EXISTS [dbo].[CrudTienda]
GO
/****** Object:  StoredProcedure [dbo].[CrudClienteArticulo]    Script Date: 29/01/2024 4:17:27 ******/
DROP PROCEDURE IF EXISTS [dbo].[CrudClienteArticulo]
GO
/****** Object:  StoredProcedure [dbo].[CrudCleinteArticulo]    Script Date: 29/01/2024 4:17:27 ******/
DROP PROCEDURE IF EXISTS [dbo].[CrudCleinteArticulo]
GO
/****** Object:  StoredProcedure [dbo].[cdrudCliente]    Script Date: 29/01/2024 4:17:27 ******/
DROP PROCEDURE IF EXISTS [dbo].[cdrudCliente]
GO
/****** Object:  StoredProcedure [dbo].[add_Articulos]    Script Date: 29/01/2024 4:17:27 ******/
DROP PROCEDURE IF EXISTS [dbo].[add_Articulos]
GO
/****** Object:  Table [dbo].[Tienda]    Script Date: 29/01/2024 4:17:27 ******/
DROP TABLE IF EXISTS [dbo].[Tienda]
GO
/****** Object:  Table [dbo].[Clientes]    Script Date: 29/01/2024 4:17:27 ******/
DROP TABLE IF EXISTS [dbo].[Clientes]
GO
/****** Object:  Table [dbo].[ClienteArticulo]    Script Date: 29/01/2024 4:17:27 ******/
DROP TABLE IF EXISTS [dbo].[ClienteArticulo]
GO
/****** Object:  Table [dbo].[ArticulosTienda]    Script Date: 29/01/2024 4:17:27 ******/
DROP TABLE IF EXISTS [dbo].[ArticulosTienda]
GO
/****** Object:  Table [dbo].[Articulos]    Script Date: 29/01/2024 4:17:27 ******/
DROP TABLE IF EXISTS [dbo].[Articulos]
GO
/****** Object:  Table [dbo].[Articulos]    Script Date: 29/01/2024 4:17:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Articulos](
	[id_art] [int] IDENTITY(1,1) NOT NULL,
	[codigo] [varchar](150) NULL,
	[Descripcion] [varchar](200) NULL,
	[Precio] [decimal](18, 0) NULL,
	[stock] [decimal](18, 0) NULL,
	[Unidad] [varchar](10) NULL,
	[Activo] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_art] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ArticulosTienda]    Script Date: 29/01/2024 4:17:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ArticulosTienda](
	[id_art_t] [int] IDENTITY(1,1) NOT NULL,
	[id_tienda] [int] NULL,
	[id_art] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_art_t] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ClienteArticulo]    Script Date: 29/01/2024 4:17:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ClienteArticulo](
	[id_cli_art] [int] IDENTITY(1,1) NOT NULL,
	[id_Cliente] [int] NULL,
	[id_art] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_cli_art] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Clientes]    Script Date: 29/01/2024 4:17:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Clientes](
	[id_cliente] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](150) NULL,
	[Apellidos] [varchar](150) NULL,
	[Email] [varchar](150) NULL,
	[Direccion] [varchar](150) NULL,
	[pawd] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id_cliente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tienda]    Script Date: 29/01/2024 4:17:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tienda](
	[id_tienda] [int] IDENTITY(1,1) NOT NULL,
	[Sucursal] [varchar](150) NULL,
	[Direccion] [varchar](150) NULL,
PRIMARY KEY CLUSTERED 
(
	[id_tienda] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Articulos] ON 
GO
INSERT [dbo].[Articulos] ([id_art], [codigo], [Descripcion], [Precio], [stock], [Unidad], [Activo]) VALUES (1, N'01', N'Pantalla plana tv 42', CAST(8000 AS Decimal(18, 0)), CAST(50 AS Decimal(18, 0)), N'pz', 1)
GO
INSERT [dbo].[Articulos] ([id_art], [codigo], [Descripcion], [Precio], [stock], [Unidad], [Activo]) VALUES (2, N'02', N'Pantalla plana tv 55', CAST(15000 AS Decimal(18, 0)), CAST(50 AS Decimal(18, 0)), N'pz', 1)
GO
INSERT [dbo].[Articulos] ([id_art], [codigo], [Descripcion], [Precio], [stock], [Unidad], [Activo]) VALUES (3, N'03', N'Laptop ', CAST(15000 AS Decimal(18, 0)), CAST(50 AS Decimal(18, 0)), N'pz', 1)
GO
INSERT [dbo].[Articulos] ([id_art], [codigo], [Descripcion], [Precio], [stock], [Unidad], [Activo]) VALUES (9, N'0006', N'Vasos', CAST(60 AS Decimal(18, 0)), CAST(500 AS Decimal(18, 0)), N'', 1)
GO
SET IDENTITY_INSERT [dbo].[Articulos] OFF
GO
SET IDENTITY_INSERT [dbo].[ArticulosTienda] ON 
GO
INSERT [dbo].[ArticulosTienda] ([id_art_t], [id_tienda], [id_art]) VALUES (1, 2, 1)
GO
INSERT [dbo].[ArticulosTienda] ([id_art_t], [id_tienda], [id_art]) VALUES (2, 2, 1)
GO
INSERT [dbo].[ArticulosTienda] ([id_art_t], [id_tienda], [id_art]) VALUES (3, 2, 3)
GO
INSERT [dbo].[ArticulosTienda] ([id_art_t], [id_tienda], [id_art]) VALUES (4, 4, 9)
GO
SET IDENTITY_INSERT [dbo].[ArticulosTienda] OFF
GO
SET IDENTITY_INSERT [dbo].[ClienteArticulo] ON 
GO
INSERT [dbo].[ClienteArticulo] ([id_cli_art], [id_Cliente], [id_art]) VALUES (1, 6, 3)
GO
SET IDENTITY_INSERT [dbo].[ClienteArticulo] OFF
GO
SET IDENTITY_INSERT [dbo].[Clientes] ON 
GO

GO
INSERT [dbo].[Clientes] ([id_cliente], [Nombre], [Apellidos], [Email], [Direccion], [pawd]) VALUES (6, N'Jesus', N'Diaz Felix', N'jesus', N'Macuspana,tabasco,mecixo', N'1234')
GO
SET IDENTITY_INSERT [dbo].[Clientes] OFF
GO
SET IDENTITY_INSERT [dbo].[Tienda] ON 
GO
INSERT [dbo].[Tienda] ([id_tienda], [Sucursal], [Direccion]) VALUES (2, N'Liverppol', N'Villahemosa,tabasco,mxico')
GO
INSERT [dbo].[Tienda] ([id_tienda], [Sucursal], [Direccion]) VALUES (4, N'Sam', N'mexico')
GO
INSERT [dbo].[Tienda] ([id_tienda], [Sucursal], [Direccion]) VALUES (5, N'Grupo masc', N'Mexico')
GO
SET IDENTITY_INSERT [dbo].[Tienda] OFF
GO
/****** Object:  StoredProcedure [dbo].[add_Articulos]    Script Date: 29/01/2024 4:17:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE procedure  [dbo].[add_Articulos]
@Id int,
@codigo varchar(10),
@Descripcion varchar(100),
@precio decimal,
@stock  decimal,
@unidad varchar(5)

as
begin


insert into Articulos values(@codigo,@Descripcion,@precio,@stock,@unidad,1)
select top 1 * from  Articulos

end
GO
/****** Object:  StoredProcedure [dbo].[cdrudCliente]    Script Date: 29/01/2024 4:17:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

   
CREATE procedure [dbo].[cdrudCliente] 
@Id int=0,
@nombre varchar(100)='',
@apellidos varchar(100)='',
@direccion varchar (100)='',
@email varchar(100)='',
@opcion int=1,
@password varchar(30)=''
as
begin

if @opcion=1
begin
select * from Clientes;
end

if @opcion=2
begin
insert into Clientes values(@nombre,@apellidos,@email,@direccion,123);

select top 1 *
  from Clientes
 order by id_cliente asc;

end
if @Opcion=3
begin
delete from  Clientes where id_cliente=@Id;
select 1
end
if @opcion=4
begin
update Clientes
set
Nombre=@nombre,
Apellidos=@apellidos,
Direccion=@direccion,
Email=@email
where id_cliente=@Id
select *from Clientes where id_cliente=@Id
end

if @opcion=5
 begin
  
  select * from  clientes where id_cliente=@Id;
  end

  
if @opcion=6
 begin
  
  select id_cliente id, email[user],nombre[name] from  clientes where Email='jesus' and pawd='1234';
  end


end

GO
/****** Object:  StoredProcedure [dbo].[CrudCleinteArticulo]    Script Date: 29/01/2024 4:17:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure  [dbo].[CrudCleinteArticulo] 
@Id int=0,
@IDCleinte varchar(10)='',
@IdArticulo varchar(100)='',
@opcion int=1
as
begin

if @opcion=1
begin
select * from Tienda;
end

if @opcion=2
begin
insert into ClienteArticulo (id_Cliente,id_art) values(@IDCleinte,@IdArticulo);
select top 1 *
  from ClienteArticulo

 order by id_art;
 end
if @Opcion=3
begin
select top 1 * into #t
  from ClienteArticulo where id_cli_art=@Id;

delete from  ClienteArticulo where id_cli_art=@Id;
select *from  #t;
end
if @opcion=4
begin
update ClienteArticulo
set
id_art=@IdArticulo,id_Cliente=@IDCleinte
where id_cli_art=@Id

select *from ClienteArticulo where id_cli_art=@Id
end

end

select * from ClienteArticulo
 


GO
/****** Object:  StoredProcedure [dbo].[CrudClienteArticulo]    Script Date: 29/01/2024 4:17:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure  [dbo].[CrudClienteArticulo] 
@Id int=0,
@IdCliente varchar(10)='',
@IdArticulo varchar(100)='',
@opcion int=1
as
begin

if @opcion=1
begin
select id_cli_art as id,Nombre +' ' +Apellidos as cliente,Direccion, a.Descripcion articulo from ClienteArticulo  cla
join Clientes c on c.id_cliente=cla.id_Cliente
join Articulos a on a.id_art=cla.id_art
;
end

if @opcion=2
begin
insert into ClienteArticulo (id_Cliente,id_art) values(@IdCliente,@IdArticulo);
select top 1 *
  from ClienteArticulo

 order by id_art;
 end
if @Opcion=3
begin
select top 1 * into #t
  from ClienteArticulo where id_cli_art=@Id;

delete from  ClienteArticulo where id_cli_art=@Id;
select *from  #t;
end
if @opcion=4
begin
update ClienteArticulo
set
id_art=@IdArticulo,id_Cliente=@IdCliente
where id_cli_art=@Id

select *from ClienteArticulo where id_cli_art=@Id
end

end




GO
/****** Object:  StoredProcedure [dbo].[CrudTienda]    Script Date: 29/01/2024 4:17:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE procedure  [dbo].[CrudTienda] 
@Id int=0,
@Sucursal varchar(10)='',
@Direccion varchar(100)='',
@opcion int=1
as
begin

if @opcion=1
begin
select * from Tienda;
end
if (@opcion=5)
begin
select * from Tienda where id_tienda=@Id;
end
if @opcion=2
begin
insert into tienda values(@Sucursal,@Direccion);
select top  1 * from Tienda
end
if @Opcion=3
begin
delete from  Tienda where id_tienda=@Id;
select 1
end
if @opcion=4
begin
update tienda
set
Sucursal=@Sucursal,Direccion=@Direccion
where id_tienda=@Id
select *from tienda where id_tienda=@Id
end

end

GO
/****** Object:  StoredProcedure [dbo].[CrudTiendaArt]    Script Date: 29/01/2024 4:17:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE procedure  [dbo].[CrudTiendaArt] 
@Id int=0,
@Idtienda varchar(10)='',
@IdArticulo varchar(100)='',
@opcion int=1
as
begin

if @opcion=1
begin
select  r.id_art_t as id,a.id_art idarticulo, a.Descripcion articulo,t.id_tienda idtienda,t.Sucursal as tienda from  ArticulosTienda r
join Tienda t on t.id_tienda =r.id_tienda
join Articulos a on a.id_art=r.id_art


end

if @opcion=2
begin
insert into ArticulosTienda values(@Idtienda,@IdArticulo);
select top 1 *
  from ArticulosTienda

 order by id_art_t;
 end
if @Opcion=3
begin
select top 1 * into #t
  from ArticulosTienda where id_art_t=@Id;

delete from  ArticulosTienda where id_art_t=@Id;
select *from  #t;
end
if @opcion=4
begin
update ArticulosTienda
set
id_art=@IdArticulo,id_tienda=@Idtienda
where id_art_t=@Id

select *from ArticulosTienda where id_art_t=@Id
end

end



GO
/****** Object:  StoredProcedure [dbo].[delArticulos]    Script Date: 29/01/2024 4:17:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure  [dbo].[delArticulos]
@Id int
as
begin
select *  into #tempart from Articulos where id_art=@Id;
delete from Articulos where id_art=@id;
select * from #tempart;
end
GO
/****** Object:  StoredProcedure [dbo].[GetArticulos]    Script Date: 29/01/2024 4:17:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure  [dbo].[GetArticulos] 
as
begin
select * from Articulos;
end
GO
/****** Object:  StoredProcedure [dbo].[GetArticulosId]    Script Date: 29/01/2024 4:17:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure  [dbo].[GetArticulosId] 
@id int
as
begin
select * from Articulos where id_art=@id;
end
GO
/****** Object:  StoredProcedure [dbo].[updArticulos]    Script Date: 29/01/2024 4:17:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create procedure  [dbo].[updArticulos] 
@Id int,
@codigo varchar(10),
@Descripcion varchar(100),
@precio decimal,
@stock  decimal,
@unidad varchar(5)

as
begin

update Articulos
set codigo=@codigo,
 Descripcion=@Descripcion,
 Precio=@precio,
 stock=@stock,
 Unidad=@unidad
 where id_art=@Id


end
GO
