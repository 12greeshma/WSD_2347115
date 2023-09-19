<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>dog data</title>
      </head>
      <body>
        <h1>Canine Details</h1>
        <table border="1">
          <tr>
            <th>Breed</th>
            <th>Color</th>
            <th>Country</th>
          </tr>
          <xsl:apply-templates select="Canine"/>
        </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="Canine">
    <tr>
      <td><xsl:value-of select="Canine/breed1/breed"/></td>
      <td><xsl:value-of select="Canine/breed1/color"/></td>
      <td><xsl:value-of select="Canine/breed1/country"/></td>
    </tr>
  </xsl:template>
</xsl:stylesheet>
